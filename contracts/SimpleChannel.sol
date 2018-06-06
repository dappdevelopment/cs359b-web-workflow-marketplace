pragma solidity ^0.4.23;

contract SimpleChannel {

  // // Only one channel may be open for any two participants at any one time
  struct Channel {
    address sender;
    address recipient;
    uint deposit;
    uint startDate;
    uint timeout;
  }
  mapping (bytes32 => Channel) channels;
  mapping (address => mapping(address => bytes32)) active_ids;

  function OpenChannel(address to, uint timeout) payable public returns (bytes32) {
    require(to != msg.sender);
    require(active_ids[msg.sender][to] == bytes32(0));

    // Create a channel
    bytes32 id = keccak256(msg.sender, to, now);

    // Initialize the channel
    Channel memory _channel;
    _channel.recipient = to;
    _channel.sender = msg.sender;
    _channel.deposit = msg.value;
    _channel.startDate = now;
    _channel.timeout = timeout;

    channels[id] = _channel;
    active_ids[msg.sender][to] = id;
    return id;
  }

  // https://ethereum.stackexchange.com/questions/1777/workflow-on-signing-a-string-with-private-key-followed-by-signature-verificatio
  // usage: Alice needs to call CloseChannel twice for multi-sig
  // once with Bob's signed pair and once with her own.
  function CloseChannel(bytes32 id, bytes32 h,
                        uint8 v, bytes32 r, bytes32 s,
                        uint value) public {

    require(DoesChannelExist(id));
    Channel memory channel = channels[id];

    // Only the recipient can close a channel
    require(msg.sender == channel.recipient);

    // Only the sender's signature can unlock the channel
    address signer = ecrecover(h, v, r, s);
    require(signer == channel.sender);

    // Make sure signed hash matches the channel and amount
    bytes32 proof = keccak256(id, value);
    require(proof == h);

    // Disburse money, delete the channel
    require(channel.deposit >= value);
    require(channel.recipient.send(value));
    require(channel.sender.send(channel.deposit - value));
    delete active_ids[channel.sender][channel.recipient];
    delete channels[id];
  }


  function ChannelTimeout(bytes32 id) public {
    require(DoesChannelExist(id));
    Channel memory channel = channels[id];
    uint startDate = channel.startDate;
    uint channelTimeout = channel.timeout;
    address channelSender = channel.sender;

    require(startDate + channelTimeout <= now);

    require(channelSender.send(channel.deposit));
  }

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

  // Returns true if this is an active channel
  function DoesChannelExist(bytes32 id) public constant returns (bool) {
    return channels[id].sender != address(0);
  }


  function Keccak2(bytes32 from, uint to) public pure returns (bytes32) {
    return keccak256(from,to);
  }
  function Keccak1(bytes32 from) public pure returns (bytes32) {
    return keccak256(from);
  }
  function Sha3(bytes32 from) public pure returns (bytes32) {
    return sha3(from);
  }
  function Test(bytes32 id, uint value, bytes32 h) public pure returns (bool) {
    bytes32 proof = keccak256(id, value);
    return proof == h;
  }









//   // old single channel version...
//   address public channelSender;     // sending money
//   address public channelRecipient;  // receiving money
//   uint public startDate;
//   uint public channelTimeout;
//   mapping (bytes32 => address) signatures;
//
//
//   constructor (address to, uint timeout) payable public {
//     channelRecipient = to;
//     channelSender = msg.sender;
//     startDate = now;
//     channelTimeout = timeout;
//   }
//
//   // https://ethereum.stackexchange.com/questions/1777/workflow-on-signing-a-string-with-private-key-followed-by-signature-verificatio
//   // usage: Alice needs to call CloseChannel twice for multi-sig
//   // once with Bob's signed pair and once with her own.
//   function CloseChannelOld(bytes32 h, uint8 v, bytes32 r, bytes32 s, uint value) public {
//
//     address signer;
//     bytes32 proof;
//
//     // get signer from signature
//     signer = ecrecover(h, v, r, s);
//
//     // require signature from valid party
//     require(signer == channelSender || signer == channelRecipient);
//
//     proof = keccak256(this, value);
//
//     // signature is valid but doesn't match the data provided
//     require(proof == h);
//
//     if (signatures[proof] == 0)
//       signatures[proof] = signer;
//     else if (signatures[proof] != signer) {
//       // channel completed, both signatures provided
//       require(channelRecipient.send(value));
//       selfdestruct(channelSender);
//     }
//
//   }
//
//   function ChannelTimeoutOld() public {
//     require(startDate + channelTimeout <= now);
//
//     selfdestruct(channelSender);
//   }

}

// asthma patients: pollen hurts.

// live demo for pollen

// then, some larger use cases. e.g. marketing automation...

// you can send money to a contract before it's created...
// send eth to any address you want. contract addrs are really predictable.


// expensive to create contracts
// just have 1 contract that
// keeps track of multiple channels

// method: 721 non fungible token
// mapping for all channels, and a array with all channel ids
// record the demo

