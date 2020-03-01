var Web3 = require('web3');

const blockchainClient = new Web3(Web3.givenProvider || "ws://localhost:8546");

export default blockchainClient;