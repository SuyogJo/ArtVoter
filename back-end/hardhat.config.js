require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.ETHEREUM_RINKEBY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: "0scsUnDWOtxirh9OKsMSy9E5DV3TTlhf"
  }
};
