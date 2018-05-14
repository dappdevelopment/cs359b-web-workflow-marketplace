pragma solidity ^0.4.23;

import "./ERC721.sol";

contract Workflows is ERC721 {
    string public name = "Automated Workflow";
    string public symbol = "Workflow";

    struct Rating {
        uint8 stars; //from 1 to 5
        string review;
        address reviewer;
    }

    struct Workflow {
        // Metadata
        string name;
        address author;
        string tag;
        uint256 price;
        // Array of Rating struct
        Rating[] ratings;
        // Total number of stars
        uint256 totalStars;
        // Total number of ratings
        uint256 totalRatings;
        // Number of one, two, ..., five stars 
        uint256 numOneStars;
        uint256 numTwoStars;
        uint256 numThreeStars;
        uint256 numFourStars;
        uint256 numFiveStars;
    }

    // Map workflow ids to Workflow struct containing the workflow's data
    mapping (uint256 => Workflow) public workflows;

    // @notice Create a new workflow
    // @param _name The name of the workflow to be created
    // @param _tag The tag of the workflow to be created
    // @param _price The price of the workflow to be created
    function createWorkflow(string _name, string _tag, uint256 _price) public {
        _createWorkflow(_name, _tag, _price);
    }

    // @notice Create a new workflow
    // @param _name The name of the workflow to be created
    // @param _tag The tag of the workflow to be created
    // @param _price The price of the workflow to be created
    function _createWorkflow(string _name, string _tag, uint256 _price) internal {
        uint256 _workflowId = totalWorkflows;
        _addTokenTo(msg.sender, _workflowId);
        existingWorkflowIds[_workflowId] = true;
        workflows[_workflowId].name = _name;
        workflows[_workflowId].author = msg.sender;
        workflows[_workflowId].tag = _tag;
        workflows[_workflowId].price = _price;
        workflows[_workflowId].totalStars = 0;
        workflows[_workflowId].totalRatings = 0;
        totalWorkflows++;
        
        emit WorkflowCreated(_workflowId, msg.sender);
    }

    // @notice Rate a new workflow
    // @param _workflowId The Id of the workflow to be rated
    // @param _stars The stars to be given to selected workflow
    // @param _review The review to be given to the selected workflow
    function rateWorkflow(uint256 _workflowId, uint8 _stars, string _review) public {
        _rateWorkflow(_workflowId, _stars, _review);
    }

    // @notice Rate a new workflow
    // @param _workflowId The Id of the workflow to be rated
    // @param _stars The stars to be given to selected workflow
    // @param _review The review to be given to the selected workflow
    function _rateWorkflow(uint256 _workflowId, uint8 _stars, string _review) internal {
        // Require that _workflowId exists
        require(existingWorkflowIds[_workflowId] == true);
        // Require that the stars are 1-5
        require(_stars == 1 || _stars == 2 || _stars == 3 || _stars == 4 || _stars == 5);
        // Author cannot rate his/her own workflow
        require(workflows[_workflowId].author != msg.sender);
        
        Rating memory rating = Rating({
            stars: _stars,
            review: _review,
            reviewer: msg.sender
        });
        workflows[_workflowId].ratings.push(rating);
        workflows[_workflowId].totalRatings++;

        if (_stars == 1) {
            workflows[_workflowId].numOneStars++;
            workflows[_workflowId].totalStars++;
        } else if (_stars == 2) {
            workflows[_workflowId].numTwoStars++;
            workflows[_workflowId].totalStars += 2;
        } else if (_stars == 3) {
            workflows[_workflowId].numThreeStars++;
            workflows[_workflowId].totalStars += 3;
        } else if (_stars == 4) {
            workflows[_workflowId].numFourStars++;
            workflows[_workflowId].totalStars += 4;
        } else {
            workflows[_workflowId].numFiveStars++;
            workflows[_workflowId].totalStars += 5;
        }

        emit WorkflowRated(_workflowId, _stars);
    }

    // @notice Examine the details of a selected workflow
    // @param _workflowId The Id of the workflow to be examined
    function seeWorkflowDetails(uint256 _workflowId) public view 
        returns (string, uint256, address, string, uint256, uint256, uint256) {
        // Require that _workflowId exists
        require(existingWorkflowIds[_workflowId] == true);
        return (workflows[_workflowId].name, _workflowId, workflows[_workflowId].author, 
            workflows[_workflowId].tag, workflows[_workflowId].price, 
            workflows[_workflowId].totalStars, workflows[_workflowId].totalRatings);
    }

}