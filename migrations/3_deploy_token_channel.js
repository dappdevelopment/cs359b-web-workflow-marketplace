var TokenChannels = artifacts.require("TokenChannels");
var SimpleChannel = artifacts.require("SimpleChannel");
var WorkflowToken = artifacts.require("WorkflowToken");
module.exports = function(deployer) {
  deployer.deploy(TokenChannels);
  deployer.deploy(SimpleChannel, "0x6B1FF4f4dbfd5aA1BeaE7d8F9f2fd658aEFcbaf0", 1);
  deployer.deploy(WorkflowToken);
};
