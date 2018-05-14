function app() {
    if (typeof web3 == 'undefined') throw 'No web3 detected. Is Metamask/Mist being used?';
    web3 = new Web3(web3.currentProvider); // MetaMask injected Ethereum provider
    console.log("Using web3 version: " + Web3.version);
  
    var contract;
    var userAccount;
  
    var contractDataPromise = $.getJSON('WorkflowMarket.json');
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
       			$('#display').text(balance + " tokens");
       			$("#loader").hide();
            });
            contract.methods.getAllWorkflows(userAccount).call().then(function (workflows) {
                $("#display-workflows").text(workflows);
                $("#loader").hide();
            });
            contract.methods.getAllPotsOnMarket().call().then(function (pots) {
                $("#display-pots").text(pots);
                $("#loader").hide();
            });
        }
         
     	function transfer(to, amount) {
            if (!to || !amount) return console.log("Fill in both fields");

            $("#loader").show();

            contract.methods.transfer(to, amount).send({from: userAccount})
                .then(refreshBalance)
                .catch(function (e) {
                    $("#loader").hide();
                });
            }

            $("#button").click(function() {
                var toAddress = $("#address").val();
                var amount = $("#amount").val();
                transfer(toAddress, amount);
		});
        
        function createWorkflow(name, tag, price) { 
            if (!name || !tag || !price) return console.log("Fill in Workflow Name, Price, and Tag fields");
    
            $("#loader").show();
    
            contract.methods.createWorkflow(name, tag, price).send({from: userAccount})
                .then(refreshBalance)
                .catch(function (e) {
                    $("#loader").hide();
                });
            }

            $("#button-create").click(function() {
                var name = $("#workflow-name").val();
                var tag = $("#workflow-tag").val();
                var price = $("#workflow-price").val();
                createWorkflow(name, tag, price);
        });

        function seeWorkflowDetails(workflowId) { 
            if (!workflowId) return console.log("Fill in Workflow ID field");
    
            $("#loader").show();
    
            contract.methods.seeWorkflowDetails(workflowId).call().then(function (details) {
                    $('#workflow-details').text("Name: " + details[0] + ", ID: " +  details[1] + ", Price: " 
                        + details[4] + " tokens, Tags: " + details[3] + ", Total Stars: " + details[5] 
                        + ", Total Ratings: " + details[6]);
                    $("#loader").hide();
                });
            }

            $("#button-examine").click(function() {
                var workflowId = $("#workflow-id").val();
                seeWorkflowDetails(workflowId);
        });

        function rateWorkflow(workflowId, stars, review) { 
            if (!workflowId || !stars || !review) return console.log("Fill in Workflow ID, Rating, and Review fields");
    
            $("#loader").show();
    
            contract.methods.rateWorkflow(workflowId, stars, review).send({from: userAccount})
                .then(refreshBalance)
                .catch(function (e) {
                    $("#loader").hide();
                });
            }

            $("#button-review").click(function() {
                var workflowId = $("#workflow-id").val();
                var stars = $("#workflow-stars").val();
                var review = $("#workflow-review").val();
                rateWorkflow(workflowId, stars, review);
        });

        function createPot(workflowId, potSize, starsStake) { 
            if (!workflowId || !potSize || !starsStake) return console.log("Fill in Workflow ID, Pot Size, and Stake fields");
    
            $("#loader").show();
    
            contract.methods.createPot(workflowId, potSize, starsStake).send({from: userAccount})
                .then(refreshBalance)
                .catch(function (e) {
                    $("#loader").hide();
                });
            }

            $("#button-create-pot").click(function() {
                var workflowId = $("#workflow-id").val();
                var potSize = $("#pot-size").val();
                var starsStake = $("#pot-stars").val();
                createPot(workflowId, potSize, starsStake);
        });

        function seePotDetails(potId) { 
            if (!potId) return console.log("Fill in Pot ID field");
    
            $("#loader").show();
    
            contract.methods.seePotDetails(potId).call().then(function (details) {
                    $('#pot-details').text("Pot ID: " + details[0] + ", Workflow ID: " +  details[1] + ", Pot Size: " 
                        + details[2] + " tokens, Sum of Bets For: " + details[3] + " tokens, Sum of Bets Against: " + details[4] 
                        + " tokens, Status: " + details[5]);
                    $("#loader").hide();
                });
            }

            $("#button-examine-pot").click(function() {
                var potId = $("#pot-id").val();
                seePotDetails(potId);
        });

        function sendBet(potId, betFor, betAgainst) {
            if (!potId || !betFor || !betAgainst) return console.log("Fill in Pot ID and Bet Amounts fields");

            $("#loader").show();

            contract.methods.sendBet(potId, betFor, betAgainst).send({from: userAccount})
                .then(refreshBalance)
                .catch(function (e) {
                    $("#loader").hide();
                });
            }

            $("#button-send-bet").click(function() {
                var potId = $("#pot-id").val();
                var betFor = $("#bet-for").val();
                var betAgainst = $("#bet-against").val();
                sendBet(potId, betFor, betAgainst);
        });
        
        

}
$(document).ready(app);