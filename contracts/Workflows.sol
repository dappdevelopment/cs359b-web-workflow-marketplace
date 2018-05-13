pragma solidity ^0.4.23;

import "./ERC721.sol";

contract Workflows is ERC721 {
    string public name = "Automated Workflow";
    string public symbol = "Workflow";

    struct Rating {
        uint256 stars; //from 1 to 5
        string review;
        address reviewer;
    }

    struct Workflow {
        string name;
        address author;
        string tag;
        uint256 price;
        Rating[] oneStars;
        Rating[] twoStars;
        Rating[] threeStars;
        Rating[] fourStars;
        Rating[] fiveStars;
    }

    // Map workflow ids to Workflow struct containing the workflow's data
    mapping (uint256 => Workflow) public workflows;

    uint256[] public existingIds;

    function createWorkflow(string _name, address _author, string _tag, uint256 _price) public {
        uint256 _workflowId = totalWorkflows + 1;
        _createWorkflow(_name, _author, _tag, _price, _workflowId);
    }

    function _createWorkflow(string _name, address _author, string _tag, uint256 _price, uint256 _workflowId) internal {
        _addTokenTo(_author, _workflowId);
        totalWorkflows++;
        existingIds.push(_workflowId);
        workflows[_workflowId].name = _name;
        workflows[_workflowId].author = _author;
        workflows[_workflowId].tag = _tag;
        workflows[_workflowId].price = _price;

        emit WorkflowCreated(_workflowId, _author);
    }
}