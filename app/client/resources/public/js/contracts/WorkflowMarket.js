function app() {
  if (typeof web3 == 'undefined') throw 'No web3 detected. Is Metamask/Mist being used?';
  web3 = new Web3(web3.currentProvider); // MetaMask injected Ethereum provider
  console.log("Using web3 version: " + Web3.version);

  var contract;
  var userAccount;

  var contractDataPromise = $.getJSON('/contracts/WorkflowMarket.json');
  var networkIdPromise = web3.eth.net.getId(); // resolves on the current network id
  var accountsPromise = web3.eth.getAccounts(); // resolves on an array of accounts

  Promise.all([contractDataPromise, networkIdPromise, accountsPromise])
    .then(function initApp(results) {
      var contractData = results[0];
      var networkId = results[1];
      var accounts = results[2];
      userAccount = accounts[0];

      // Make sure the contract is deployed on the network to which our provider is connected
      if (!(networkId in contractData.networks)) {
        throw new Error("Contract not found in selected Ethereum network on MetaMask.")
      }

      var contractAddress = contractData.networks[networkId].address;
      contract = new web3.eth.Contract(contractData.abi, contractAddress);
    })
  // Refresh balance instead of printing to the console
    .then(refreshBalance)
    .catch(console.error);

  function refreshBalance() { // Returns web3's PromiEvent
    // Calling the contract (try with/without declaring view)
    contract.methods.balanceOf(userAccount).call().then(function (balance) {
    });
    contract.methods.getAllWorkflows(userAccount).call().then(function (workflows) {
    });
    contract.methods.getAllPotsOnMarket().call().then(function (pots) {
    });
  }

  function transfer(to, amount) {
    if (!to || !amount) return console.log("Fill in both fields");

    contract.methods.transfer(to, amount).send({from: userAccount})
      .then(refreshBalance)
  }

  function createWorkflow(name, tag, price) {
    if (!name || !tag || !price) return console.log("Fill in Workflow Name, Price, and Tag fields");

    contract.methods.createWorkflow(name, tag, price).send({from: userAccount})
      .then(refreshBalance)
  }

  function seeWorkflowDetails(workflowId) {
    if (!workflowId) return console.log("Fill in Workflow ID field");

    contract.methods.seeWorkflowDetails(workflowId).call().then(function (details) {
    });
  }

  function rateWorkflow(workflowId, stars, review) {
    if (!workflowId || !stars || !review) return console.log("Fill in Workflow ID, Rating, and Review fields");

    contract.methods.rateWorkflow(workflowId, stars, review).send({from: userAccount})
      .then(refreshBalance)
  }


  function createPot(workflowId, potSize, starsStake) {
    if (!workflowId || !potSize || !starsStake) return console.log("Fill in Workflow ID, Pot Size, and Stake fields");


    contract.methods.createPot(workflowId, potSize, starsStake).send({from: userAccount})
      .then(refreshBalance)
  }

  function seePotDetails(potId) {
    if (!potId) return console.log("Fill in Pot ID field");

    contract.methods.seePotDetails(potId).call().then(function (details) {
    });
  }

  function sendBet(potId, betFor, betAgainst) {
    if (!potId || !betFor || !betAgainst) return console.log("Fill in Pot ID and Bet Amounts fields");

    contract.methods.sendBet(potId, betFor, betAgainst).send({from: userAccount})
      .then(refreshBalance)
      .catch(function (e) {
        $("#loader").hide();
      });
  }


}
$(document).ready(app);
