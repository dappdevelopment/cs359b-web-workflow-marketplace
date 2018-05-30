pragma solidity ^0.4.23;

import "./WorkflowToken.sol";
import "./Workflows.sol";

contract WorkflowMarket is WorkflowToken, Workflows {
    address creator;
    event RatingChanged(address indexed _address, uint256 _thumbsup);

    constructor() public {
        balances[msg.sender] = _totalSupply;        // Give the creator initially all the tokens
        creator = msg.sender; // Set the creator of the contract
    }
    
}
