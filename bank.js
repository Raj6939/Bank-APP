if(window.ethereum){
	var accounts=ethereum.request({method :'eth_requestAccounts'});
var web3 = new Web3(window.ethereum);

var address="0xBd1475C0628abdB08ace8A33DD28367a250a02fd";
var abi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contract= new web3.eth.Contract(abi,address);
contract.methods.getBalance().call().then(function(bal)  
{ 
$('#balance').html(bal);
 })

 $('#deposite').click(function()
 {
	var amt=0;
	amt=parseInt($('#amount').val());
	web3.eth.getAccounts().then(function(accounts)
	{
		var acc = accounts[0];
		return contract.methods.deposit(amt).send({from:acc});
	}).then(function(tx)
	{
		console.log(tx);
	}).catch(function(tx)
	{
		console.log(tx);
	})
})
$('#withdraw').click(function()
{
   var amt=0;
   amt=parseInt($('#amount').val());
   web3.eth.getAccounts().then(function(accounts)
   {
	   var acc = accounts[0];
	   return contract.methods.withdraw(amt).send({from:acc});
   }).then(function(tx)
   {
	   console.log(tx);
   }).catch(function(tx)
   {
	   console.log(tx);
   })
})
}
