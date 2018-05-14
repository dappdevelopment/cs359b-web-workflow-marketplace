pragma solidity ^0.4.23;

import "./WorkflowToken.sol";
import "./Workflows.sol";
import "./Reputation.sol";

contract WorkflowMarket is Reputation {
    address creator;
    event RatingChanged(address indexed _address, uint256 _thumbsup);

    constructor() public {
        balances[msg.sender] = _totalSupply;        // Give the creator initially all the tokens
        creator = msg.sender; // Set the creator of the contract
    }

    function mint(uint256 _amount) public returns (bool success) {
        // Check if the caller of mint is the creator
        require(creator == msg.sender, "Only the creator of the contract can use Mint!");
        _totalSupply += _amount;
        balances[creator] += _amount;

        emit BalanceChanged(creator, balances[creator]);
        return true;
    }
}
