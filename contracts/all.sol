pragma solidity ^0.4.21;

/// @title ERC-721 Non-Fungible Token Standard
/// @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
///  Note: the ERC-165 identifier for this interface is 0x80ac58cd
contract ERC721Basic /* is ERC165 */ {
    /// @dev This emits when ownership of any NFT changes by any mechanism.
    ///  This event emits when NFTs are created (`from` == 0) and destroyed
    ///  (`to` == 0). Exception: during contract creation, any number of NFTs
    ///  may be created and assigned without emitting Transfer. At the time of
    ///  any transfer, the approved address for that NFT (if any) is reset to none.
    event WorkflowTransfer(address indexed _from, address indexed _to, uint256 _tokenId);

    /// @dev This emits when the approved address for an NFT is changed or
    ///  reaffirmed. The zero address indicates there is no approved address.
    ///  When a Transfer event emits, this also indicates that the approved
    ///  address for that NFT (if any) is reset to none.
    event WorkflowApproval(address indexed _owner, address indexed _approved, uint256 _tokenId);

    /// @dev This emits when an operator is enabled or disabled for an owner.
    ///  The operator can manage all NFTs of the owner.
    event WorkflowApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    event WorkflowCreated(uint256 _tokenId, address _owner);

    /// @notice Count NFTs tracked by this contract
    /// @return A count of valid NFTs tracked by this contract, where each one of
    ///  them has an assigned and queryable owner not equal to the zero address
    function totalWorkflowSupply() public view returns (uint256);

    /// @notice Count all NFTs assigned to an owner
    /// @dev NFTs assigned to the zero address are considered invalid, and this
    ///  function throws for queries about the zero address.
    /// @param _owner An address for whom to query the balance
    /// @return The number of NFTs owned by `_owner`, possibly zero
    function workflowBalanceOf(address _owner) public view returns (uint256);

    /// @notice Find the owner of an NFT
    /// @dev NFTs assigned to zero address are considered invalid, and queries
    ///  about them do throw.
    /// @param _tokenId The identifier for an NFT
    /// @return The address of the owner of the NFT
    /// function ownerOfWorkflow(uint256 _tokenId) public view returns (address);

    // @notice Transfers the ownership of an NFT to an address
    ///function transferWorkflow(address _to, uint256 _tokenId) public view returns(bool);

    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    ///  THEY MAY BE PERMANENTLY LOST
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    /// function transferWorkflowFrom(address _from, address _to, uint256 _tokenId) external payable;

    /// @notice Set or reaffirm the approved address for an NFT
    /// @dev The zero address indicates there is no approved address.
    /// @dev Throws unless `msg.sender` is the current NFT owner, or an authorized
    ///  operator of the current owner.
    /// @param _approved The new approved NFT controller
    /// @param _tokenId The NFT to approve
    /// function approveWorkflow(address _approved, uint256 _tokenId) public payable;
}

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 {
    function totalSupply() public view returns (uint256);

    function balanceOf(address _who) public view returns (uint256);
    function transfer(address _to, uint256 _value) public returns (bool);

    function allowance(address _owner, address _spender) public view returns (uint256);
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool);
    function approve(address _spender, uint256 _value) public returns (bool);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}


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

    //
    mapping(uint256 => uint256) workflowIndexInOwnerArray;

    // Mapping from workflow ID to owner
    mapping(uint256 => address) public workflowOwner;

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


contract Migrations {
    address public owner;
    uint public last_completed_migration;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function Migrations() public {
        owner = msg.sender;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}

contract Channel {

}

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
// Credit: https://github.com/alex-miller-0/eth-dev-101/blob/master/truffle/contracts/TokenChannelsV2.sol
/**
 * Version two of the TokenChannels contract
 * Adds nonces to the messages as well as the notion of a challenge period.
 * Either party may challenge the closing channel if they have a message with
 * a higher nonce than the one currently recorded in the channel.
 */

contract TokenChannels {

  //============================================================================
  // GLOBAL VARIABLES
  //============================================================================

  // Only one channel may be open for any two participants at any one time
  struct Channel {
    address sender;
    address recipient;
    address token;
    uint deposit;
    uint challenge;
    uint nonce;
    uint closeTime;
    uint value;
  }
  mapping (address => uint) balances;

  mapping (bytes32 => Channel) channels;
  mapping (address => mapping(address => bytes32)) active_ids;


  //============================================================================
  // STATE TRANSITION FUNCTIONS
  //============================================================================

  /**
   * Open a channel with a recipient. A non-zero message value must be included.
   *
   * address token    Address of token contract
   * address to       Address of recipient
   * uint amount      Number of token quanta to send
   */
  function OpenChannel(address token, address to, uint amount, uint challenge) public {
    // Sanity checks
    require(amount != 0);
    require(to != msg.sender);
    require(active_ids[msg.sender][to] == bytes32(0));

    // Create a channel
    bytes32 id = keccak256(msg.sender, to, now);

    // Initialize the channel
    Channel memory _channel;
    _channel.deposit = amount;
    _channel.sender = msg.sender;
    _channel.recipient = to;
    _channel.token = token;
    _channel.challenge = challenge;

    // Make the deposit
    ERC20 t = ERC20(token);
    require(t.transferFrom(msg.sender, address(this), amount));

    channels[id] = _channel;

    // Add it to the lookup table
    active_ids[msg.sender][to] = id;
  }


  /**
   * Close a channel at any time. May only be called by recipient.
   * The "value" is sent to the recipient and the remainder is refunded to the sender.
   *
   * bytes32  h         [ id, msg_hash, r, s ]
   * uint8    v         Component of signature of "h" coming from sender
   * uint     value     Amount of wei sent
   * uint     nonce     Number to be hashed with the value to form the message
   */
  function CloseChannel(bytes32[4] h, uint8 v, uint256 value, uint256 nonce) public {
    // h[0]    Channel id
    // h[1]    Hash of (id, value)
    // h[2]    r of signature
    // h[3]    s of signature

    // Grab the channel in question
    require(channels[h[0]].deposit != 0);
    Channel memory _channel;
    _channel = channels[h[0]];

    // Only the recipient can close a channel
    require(msg.sender == _channel.recipient);

    address signer = ecrecover(h[1], v, h[2], h[3]);
    require(signer == _channel.sender);

    // Make sure the hash provided is of the channel id and the amount sent
    bytes32 proof = keccak256(h[0], value, nonce);

    // Ensure the proof matches, send the value, send the remainder, and delete the channel
    require(proof == h[1]);
    require(value <= _channel.deposit);

    if (_channel.challenge == 0) {
      // If there's no challenge period, close out the channel immediately.

      // Pay recipient and refund sender the remainder
      ERC20 t = ERC20(channels[h[0]].token);
      require(t.transfer(channels[h[0]].recipient, channels[h[0]].value));
      require(t.transfer(channels[h[0]].sender, channels[h[0]].deposit-channels[h[0]].value));

      // Delete the channel
      delete active_ids[channels[h[0]].sender][channels[h[0]].recipient];
      delete channels[h[0]];
    } else {
      // Copy the data to the state and allow challenges

      _channel.nonce = nonce;
      _channel.value = value;
      _channel.closeTime = now;
      channels[h[0]] = _channel;
    }
  }


  /**
   * During the challenge period, either party may submit a proof that contains
   * a higher nonce.
   *
   * bytes32  h         [ id, msg_hash, r, s ]
   * uint8    v         Component of signature of "h" coming from sender
   * uint     value     Amount of wei sent
   * uint     nonce     Number to be hashed with the value to form the message
   */
  function Challenge(bytes32[4] h, uint8 v, uint256 value, uint256 nonce) public {
    // Grab the channel in question
    require(channels[h[0]].deposit != 0);
    Channel memory _channel;
    _channel = channels[h[0]];

    // Make sure we're still in the challenge period
    require(_channel.closeTime + _channel.challenge > now);

    // Make sure the nonce is higher
    require(_channel.nonce < nonce);

    require(msg.sender == _channel.sender || msg.sender == _channel.recipient);

    address signer = ecrecover(h[1], v, h[2], h[3]);
    require(signer == _channel.sender);

    // Make sure the hash provided is of the channel id and the amount sent
    bytes32 proof = keccak256(h[0], value, nonce);

    // Ensure the proof matches, send the value, send the remainder, and delete the channel
    require(proof == h[1]);
    require(value <= _channel.deposit);

    // Pay recipient and refund sender the remainder
    ERC20 t = ERC20(_channel.token);
    require(t.transfer(_channel.recipient, value));
    require(t.transfer(_channel.sender, _channel.deposit-value));

    // Copy data to the state
    _channel.value = value;
    _channel.nonce = nonce;
    channels[h[0]] = _channel;
  }


  /**
   * Once past its challenge period, close a channel and disperse the funds.
   * Anyone can do this.
   *
   * bytes32  id    Channel id
   */
  function Finalize(bytes32 id) public {
    // Grab the channel in question
    require(channels[id].deposit != 0);

    // Make sure we're past the challenge period
    require(channels[id].closeTime + channels[id].challenge <= now);

    // Pay recipient and refund sender the remainder
    ERC20 t = ERC20(channels[id].token);
    require(t.transfer(channels[id].recipient, channels[id].value));
    require(t.transfer(channels[id].sender, channels[id].deposit-channels[id].value));

    // Delete the channel
    delete active_ids[channels[id].sender][channels[id].recipient];
    delete channels[id];
  }



  //============================================================================
  // CONSTANT FUNCTIONS
  //============================================================================

  /**
  * Verify that a message sent will allow the channel to close.
  * Parameters are the same as for CloseChannel
   */
  function VerifyMsg(bytes32[4] h, uint8 v, uint256 value) public constant returns (bool) {
    // h[0]    Channel id
    // h[1]    Hash of (id, value)
    // h[2]    r of signature
    // h[3]    s of signature

    // Grab the channel in question
    if (channels[h[0]].deposit == 0) { return false; }
    Channel memory _channel;
    _channel = channels[h[0]];

    // https://ethereum.stackexchange.com/a/15911/1391
    // TODO put this logic into JS
    address signer = ecrecover(h[1], v, h[2], h[3]);
    if (signer != _channel.sender) { return false; }

    // Make sure the hash provided is of the channel id and the amount sent
    bytes32 proof = keccak256(h[0], value);
    // Ensure the proof matches, send the value, send the remainder, and delete the channel
    if (proof != h[1]) { return false; }
    else if (value > _channel.deposit) { return false; }

    return true;
  }

  // GETTERS

  function GetChannelId(address from, address to) public constant returns (bytes32) {
    return active_ids[from][to];
  }

  function GetDeposit(bytes32 id) public constant returns (uint) {
    return channels[id].deposit;
  }

  function GetSender(bytes32 id) public constant returns (address) {
    return channels[id].sender;
  }

  function GetRecipient(bytes32 id) public constant returns (address) {
    return channels[id].recipient;
  }

  function GetToken(bytes32 id) public constant returns (address) {
    return channels[id].token;
  }

  // Returns true if this is an active channel
  function DoesChannelExist(bytes32 id) public constant returns (bool) {
    return channels[id].token != address(0);
  }
  // Returns true if the channel is closed (or if the channel doesn't exist)
  function IsChannelClosed(bytes32 id) public constant returns (bool) {
    return channels[id].closeTime != 0;
  }

  // This will return 0 unless the channel is currently in the challenge period
  function ChallengeRemaining(bytes32 id) public constant returns (uint) {
    if (channels[id].closeTime == 0) { return 0; }
    else if (channels[id].closeTime + channels[id].challenge < now) { return 0; }
    else { return (channels[id].closeTime + channels[id].challenge) - now; }
  }

}

contract WorkflowToken is ERC20 {
    using SafeMath for uint256;
    string public symbol = "Coin";
    string public name = "WorkflowToken";
    uint256 public _totalSupply = 2100000;
    uint8 public constant decimals = 18;

    mapping(address => uint256) public balances;
    // Which address is allowed to make transfer from the account of another address,
    // and the amount allowed
    mapping(address => mapping(address => uint256)) allowed;

    event BalanceChanged(address indexed _address, uint256 _balance);
    
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _who) public view returns (uint256) {
        return balances[_who];
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(
            balances[msg.sender] >= _value &&
            _value > 0);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        // Check if the message sender can spend _value from the _from account
        require(
            allowed[_from][msg.sender] >= _value && 
            balances[_from] >= _value && 
            _value > 0
        );
        balances[_from] -= _value;
        balances[_to] += _value;
        // Reduce the allowance
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}


contract WorkflowMarket is WorkflowToken {
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


library SafeMath {
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}


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
