pragma solidity ^0.4.23;

import "./Workflows.sol";
import "./WorkflowToken.sol";

contract Pot is WorkflowToken {
    uint256 public potId;
    uint256 public workflowId;
    uint256 public potSize;
    uint256 public starsStake;
    address[] public bettorsFor;
    address[] public bettorsAgainst;
    uint256[] public betsFor;
    uint256 public sumBetsFor;
    uint256[] public betsAgainst;
    uint256 public sumBetsAgainst;
    // result can be either 0 (Still accepting bets), 1 (For side won), 2 (Against side won), or 3 (Draw)
    uint8 public result;

    event BetPlaced(uint256 _potId, uint256 _betAmount);

    constructor(uint256 _potId, uint256 _workflowId, uint256 _potSize, uint256 _starsStake) public {
        potId = _potId;
        workflowId = _workflowId;
        potSize = _potSize;
        starsStake = _starsStake;
        sumBetsFor = 0;
        sumBetsAgainst = 0;
        result = 0;
    }

    function placeBet(address bettor, uint256 _betFor, uint256 _betAgainst) public {
        // Check that the betAmount is not 0 and the pot is still open
        require(_betFor + _betAgainst != 0 && result == 0);

        // Check if the bet is valid
        require(_betFor + _betAgainst + sumBetsFor + sumBetsAgainst <= potSize, "The bet exceeds remaining pot size!");

        if (_betFor > 0) {
            sumBetsFor += _betFor;
            bettorsFor.push(bettor);
            emit BetPlaced(potId, _betFor);
        } else {
            sumBetsAgainst += _betAgainst;
            bettorsAgainst.push(bettor);
            emit BetPlaced(potId, _betAgainst);
        }   
    }

    // TODO: Complete this function to close the pot
    //function awardWinners(address[] _winners, uint256[] _bets, uint256 _potSize, uint256 sumWinningBets) public {
    //    uint256 numWinners = _bets.length;
    //    for (uint256 i = 0; i < numWinners; i++) {
    //        uint256 award = _potSize * _bets[i] / sumWinningBets;
    //        transfer(_winners[i], award);
    //    }
    //}

    // TODO: Complete this function to close the pot
    //function closePot() public {
    //    if (sumBetsFor > sumBetsAgainst) {
            // awardWinners(bettorsFor, betsFor, potSize, sumBetsFor);
    //        result = 1;
    //    } else if (sumBetsFor < sumBetsAgainst) {
            // awardWinners(bettorsAgainst, betsAgainst, potSize, sumBetsAgainst);
    //        result = 2;
    //    } else {
            // uint256 numBettorsFor = betsFor.length;
            // for (uint256 i = 0; i < numBettorsFor; i++) {
            //    transfer(bettorsFor[i], betsFor[i]);
            // }
            // uint256 numBettorsAgainst = betsAgainst.length;
            // for (uint256 j = 0; j < numBettorsAgainst; j++) {
            //    transfer(bettorsAgainst[j], betsAgainst[j]);
            //}
    //        result = 3;
    //    }
    //}
}

contract Reputation is Workflows, WorkflowToken {
    // Map potIds to Pot contracts
    mapping(uint256 => Pot) public pots;

    // Map potIds to addresses of Pot contracts
    mapping(uint256 => address) public potAddresses;

    // Number of total pots
    uint256 public totalPots;

    // Map workflow ids to boolean value to keep track of which workflow exists
    mapping(uint256 => bool) public existingPotIds;
    uint256[] public potIds;

    // Events
    event PotCreated(address indexed _address, uint256 _workflowID, uint256 _potSize);

    function createPot(uint256 _workflowId, uint256 _potSize, uint256 _starsStake) 
        public returns (bool success) {
        // Require that the workflowId is owned by msg.sender
        require(workflowOwner[_workflowId] == msg.sender);
        // Require that the workflow has enough stars to stake
        require(workflows[_workflowId].totalStars >= _starsStake);

        // Create a new pot
        uint256 _potId = totalPots;
        pots[_potId] = new Pot(_potId, _workflowId, _potSize, _starsStake);
        existingPotIds[_potId] = true;
        potIds.push(_potId);
        totalPots++;

        emit PotCreated(msg.sender, _workflowId, _potSize);
        return true;
    }

    function seePotDetails(uint256 _potId) public view
        returns (uint256, uint256, uint256, uint256, uint256, uint8) {
        // Require that the pot exists
        require(existingPotIds[_potId] == true);

        return (_potId, pots[_potId].workflowId(), pots[_potId].potSize(), pots[_potId].sumBetsFor(), 
            pots[_potId].sumBetsAgainst(), pots[_potId].result());
    }

    function sendBet(uint256 _potId, uint256 _betFor, uint256 _betAgainst) public returns (bool success) {
        // Require that either _betFor or _betAgainst has to be 0
        require(_betFor == 0 || _betAgainst == 0);
        // Check that the betAmount is not 0 and the pot is still open
        require(_betFor + _betAgainst != 0 && existingPotIds[_potId] == true && pots[_potId].result() == 0);
        // Check that msg.sender has enough fund
        require(balances[msg.sender] >= _betFor + _betAgainst);
        
        Pot pot = Pot(address(pots[_potId]));

        // Send the money to Contract Pot
        if (_betFor > 0) {
            require(balances[msg.sender] >= _betFor);
            // Call the placeBet function in Contract Pot
            pot.placeBet(msg.sender, _betFor, _betAgainst);
            transfer(address(pots[_potId]), _betFor);
        } else {
            require(balances[msg.sender] >= _betAgainst);
            // Call the placeBet function in Contract Pot
            pot.placeBet(msg.sender, _betFor, _betAgainst);
            transfer(address(pots[_potId]), _betAgainst);
        }
        
        // TODO: Return money to bettors once the pot reaches its limit

        return true;
    }

    function getAllPotsOnMarket() public view returns (uint256[]) {
        return potIds;
    }

}