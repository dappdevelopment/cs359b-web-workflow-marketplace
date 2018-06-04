pragma solidity ^0.4.23;

contract SimpleChannel {

  // // Only one channel may be open for any two participants at any one time
  // struct Channel {
  //   address sender;
  //   address recipient;
  //   uint startDate;
  //   uint timeout;
  //   mapping (bytes32 => address) signatures;
  // }
  // mapping (bytes32 => Channel) channels;

  // function OpenChannel(address to, uint timeout) payable public returns (bytes32) {
  //   require(to != msg.sender);

  //   // Create a channel
  //   bytes32 id = keccak256(msg.sender, to, now);

  //   // Initialize the channel
  //   Channel memory _channel;
  //   _channel.recipient = to;
  //   _channel.sender = msg.sender;
  //   _channel.startDate = now;
  //   _channel.timeout = timeout;

  //   channels[id] = _channel;
  //   return id;
  // }

  // // https://ethereum.stackexchange.com/questions/1777/workflow-on-signing-a-string-with-private-key-followed-by-signature-verificatio
  // // usage: Alice needs to call CloseChannel twice for multi-sig
  // // once with Bob's signed pair and once with her own.
  // function CloseChannel(bytes32 id, bytes32 h, uint8 v, bytes32 r, bytes32 s, uint value) public {

  //   address signer;
  //   bytes32 proof;
  //   require(channels[id].isValue);
  //   Channel channel = channels[id];
  //   address channelSender = channel.sender;
  //   address channelRecipient = channel.recipient;
  //   mapping (bytes32 => address) signatures = channel.signatures;

  //   // get signer from signature
  //   signer = ecrecover(h, v, r, s);

  //   // require signature from valid party
  //   require(signer == channelSender || signer == channelRecipient);

  //   proof = keccak256(this, value);

  //   // signature is valid but doesn't match the data provided
  //   require(proof == h);

  //   if (signatures[proof] == 0)
  //     signatures[proof] = signer;
  //   else if (signatures[proof] != signer) {
  //     // channel completed, both signatures provided
  //     require(channelRecipient.send(value));
  //     selfdestruct(channelSender);
  //   }

  // }

  // function ChannelTimeout(bytes32 id) public {
  //   require(channels[id].isValue);
  //   Channel channel = channels[id];
  //   uint startDate = channel.startDate;
  //   uint channelTimeout = channel.timeout;
  //   address channelSender = channel.sender;

  //   require(startDate + channelTimeout <= now);

  //   selfdestruct(channelSender);
  // }

  // function GetChannelId(address from, address to) public constant returns (bytes32) {
  //   return active_ids[from][to];
  // }

  // function GetSender(bytes32 id) public constant returns (address) {
  //   return channels[id].sender;
  // }

  // function GetRecipient(bytes32 id) public constant returns (address) {
  //   return channels[id].recipient;
  // }

  // // Returns true if this is an active channel
  // function DoesChannelExist(bytes32 id) public constant returns (bool) {
  //   return channels[id].token != address(0);
  // }
  // // Returns true if the channel is closed (or if the channel doesn't exist)
  // function IsChannelClosed(bytes32 id) public constant returns (bool) {
  //   return channels[id].closeTime != 0;
  // }










  // old single channel version...
  address public channelSender;     // sending money
  address public channelRecipient;  // receiving money
  uint public startDate;
  uint public channelTimeout;
  mapping (bytes32 => address) signatures;


  constructor (address to, uint timeout) payable public {
    channelRecipient = to;
    channelSender = msg.sender;
    startDate = now;
    channelTimeout = timeout;
  }

  // https://ethereum.stackexchange.com/questions/1777/workflow-on-signing-a-string-with-private-key-followed-by-signature-verificatio
  // usage: Alice needs to call CloseChannel twice for multi-sig
  // once with Bob's signed pair and once with her own.
  function CloseChannelOld(bytes32 h, uint8 v, bytes32 r, bytes32 s, uint value) public {

    address signer;
    bytes32 proof;

    // get signer from signature
    signer = ecrecover(h, v, r, s);

    // require signature from valid party
    require(signer == channelSender || signer == channelRecipient);

    proof = keccak256(this, value);

    // signature is valid but doesn't match the data provided
    require(proof == h);

    if (signatures[proof] == 0)
      signatures[proof] = signer;
    else if (signatures[proof] != signer) {
      // channel completed, both signatures provided
      require(channelRecipient.send(value));
      selfdestruct(channelSender);
    }

  }

  function ChannelTimeoutOld() public {
    require(startDate + channelTimeout <= now);

    selfdestruct(channelSender);
  }

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

