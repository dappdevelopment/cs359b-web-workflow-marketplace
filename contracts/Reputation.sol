pragma solidity ^0.4.21;

contract Reputation {
    struct Workflow {
        string name;
        uint256 numExe;
        uint256 numSuccess;
        Rating[] workflowRatings;
    }
    
    struct Rating {
        address from;
        uint256 ratingNumber;
    }
    
    struct Pot {
        uint256 workflow;
        uint256 potSize;
        address[] bettors;
        uint256 betFor;
        uint256 betAgainst;
    }

    address creator;
    mapping (address => Rating[]) public ratingAccounts;
    mapping (address => Workflow[]) public workflowAccounts;
    mapping (address => uint256) public balances;
    mapping (address => Pot[]) public potAccounts;
    event CreatorRatingChanged(address indexed _address, bool _success);
    event WorkflowRatingChanged(address indexed _address, uint256 _workflowID, bool _success);
    event PotCreated(address indexed _address, uint256 _workflowID, uint256 _potSize);
    event BetPlaced(address indexed _address, uint256 _betFor, uint256 _betAgainst);

    function Reputation() public {
        creator = msg.sender;
    }

    function rateCreator(address _to, uint256 _value) public returns (bool success) {
        // the message sender cannot rate itself
        require(msg.sender != _to);
        // the person being rated must authored contracts
        require(workflowAccounts[_to].length > 0);
        // the rating has to be between 0 and 5
        require(_value <= 5 && _value >= 0);

        Rating memory newRating;
        newRating.from = msg.sender;
        newRating.ratingNumber = _value;

        ratingAccounts[_to].push(newRating);
        emit CreatorRatingChanged(_to, true);

        return true;
    }
    
    function rateWorkflow(address _to, uint256 _workflowID, uint256 _value) public returns (bool success) {
         // the message sender cannot rate itself
        require(msg.sender != _to);
        // the workflowID is within bound
        require(workflowAccounts[_to].length > 0);
        require(_workflowID < workflowAccounts[_to].length && _workflowID >= 0);
        // the rating has to be between 0 and 5
        require(_value <= 5 && _value >= 0);

        Rating memory newRating;
        newRating.from = msg.sender;
        newRating.ratingNumber = _value;

        workflowAccounts[_to][_workflowID].workflowRatings.push(newRating);
        emit WorkflowRatingChanged(_to, _workflowID, true);
        return true;
    }

    function createPot(uint256 _workflowID, uint256 _potSize) public returns (bool success) {
        // the workflowID is within bound
        require(workflowAccounts[msg.sender].length > 0);
        require(_workflowID < workflowAccounts[msg.sender].length && _workflowID >= 0);

        Pot memory newPot;
        newPot.workflow = _workflowID;
        newPot.potSize = _potSize;
        newPot.betFor = 0;
        newPot.betAgainst = 0;

        potAccounts[msg.sender].push(newPot);
        emit PotCreated(msg.sender, _workflowID, _potSize);
    }

    function bet(address _potOwner, uint256 _potID, uint256 _betFor, uint256 _betAgainst) public returns (bool success) {
        // Check if the pot size has been reached
        require(potAccounts[_potOwner][_potID].betFor + potAccounts[_potOwner][_potID].betAgainst < potAccounts[_potOwner][_potID].potSize);

        // Check if the bet is valid
        require(_betFor >= 0 && _betAgainst >= 0 && _betFor + _betAgainst > 0);
        require(_betFor + _betAgainst + potAccounts[_potOwner][_potID].betFor + potAccounts[_potOwner][_potID].betAgainst <= potAccounts[_potOwner][_potID].potSize);

        potAccounts[_potOwner][_potID].betFor += _betFor;
        potAccounts[_potOwner][_potID].betFor += _betAgainst;
        potAccounts[_potOwner][_potID].bettors.push(msg.sender);

        emit BetPlaced(_potOwner, _betFor, _betAgainst); 
        return true;
    }

    // function betResult: TBD
}