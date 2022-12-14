require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

const {ALCHEMY_KEY, PRIVATE_KEY} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  paths:{
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat:{
      chainId: 1337,
    },
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    
    },
  },
  solidity: "0.8.0",
};