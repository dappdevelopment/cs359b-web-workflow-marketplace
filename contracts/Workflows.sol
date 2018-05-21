pragma solidity ^0.4.23;

import "./SafeMath.sol";

contract Workflows {
    using SafeMath for uint256;
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

    //event WorkflowCreated(uint256 _tokenId, address _owner);
    //event WorkflowRated(uint256 _tokenId, uint256 _stars);

    /**
     * Override ERC721.sol
     */
    function totalWorkflowSupply() public view returns (uint256) {
        return totalWorkflows;
    }

    function workflowBalanceOf(address _owner) public view returns (uint256) {
        return workflowAmountOwned[_owner];
    }

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
        workflowAmountOwned[_owner] = workflowAmountOwned[_owner].add(1);
    }


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
        workflows[_workflowId].totalRatings = workflows[_workflowId].totalRatings.add(1);

        if (_stars == 1) {
            workflows[_workflowId].numOneStars++;
            workflows[_workflowId].totalStars = workflows[_workflowId].totalStars.add(1);
        } else if (_stars == 2) {
            workflows[_workflowId].numTwoStars++;
            workflows[_workflowId].totalStars = workflows[_workflowId].totalStars.add(2);
        } else if (_stars == 3) {
            workflows[_workflowId].numThreeStars++;
            workflows[_workflowId].totalStars = workflows[_workflowId].totalStars.add(3);
        } else if (_stars == 4) {
            workflows[_workflowId].numFourStars++;
            workflows[_workflowId].totalStars = workflows[_workflowId].totalStars.add(4);
        } else {
            workflows[_workflowId].numFiveStars++;
            workflows[_workflowId].totalStars = workflows[_workflowId].totalStars.add(5);
        }
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