require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ROPSTEN_URL = process.env.ROPSTEN_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: ROPSTEN_URL,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};