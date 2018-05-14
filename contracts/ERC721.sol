pragma solidity ^0.4.23;

import "./ERC721Basic.sol";

/**
 * @title ERC-721 Non-Fungible Token Standard, full implementation interface
 * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract ERC721 is ERC721Basic {
    uint256 public totalWorkflows;
    
    // Array of owned workflows for a user
    mapping(address => uint256[]) public ownedWorkflows;

    // Number of workflows owned by each user
    mapping(address => uint256) workflowAmountOwned;

    // Index of workflow in owner array
    mapping(uint256 => uint256) workflowIndexInOwnerArray;

    // Mapping from workflow ID to owner
    mapping(uint256 => address) public workflowOwner;

    // Map workflow ids to boolean value to keep track of which workflow exists
    mapping(uint256 => bool) public existingWorkflowIds;

    /**
     * Override ERC721.sol
     */
    function totalWorkflowSupply() public view returns (uint256) {
        return totalWorkflows;
    }

    /**
     * Override ERC721Basic.sol
     */
    function workflowBalanceOf(address _owner) public view returns (uint256) {
        return workflowAmountOwned[_owner];
    }

    /**
     * Override ERC721Basic.sol
     */
    function ownerOfWorkflow(uint256 _workflowId) public view returns (address) {
        // Require that _workflowId exists
        require(existingWorkflowIds[_workflowId] == true);
        return workflowOwner[_workflowId];
    }

    function getAllWorkflows(address _owner) public view returns (uint256[]) {
        uint256 size = workflowAmountOwned[_owner];
        uint256[] memory result = new uint256[](size);
        for (uint i = 0; i < size; i++) {
            result[i] = ownedWorkflows[_owner][i];
        }
        return result;
    }

    function _addTokenTo(address _owner, uint256 _workflowId) internal {
        if (ownedWorkflows[_owner].length == workflowAmountOwned[_owner]) {
            ownedWorkflows[_owner].push(_workflowId);
        } else {
            ownedWorkflows[_owner][workflowAmountOwned[_owner]] = _workflowId;
        }
        workflowOwner[_workflowId] = _owner;
        workflowIndexInOwnerArray[_workflowId] = workflowAmountOwned[_owner];
        workflowAmountOwned[_owner]++;
    }
}