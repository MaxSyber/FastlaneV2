require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKey= process.env.PRIVATE_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [privateKey],
    },
    linea: {
      url: `https://linea-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [privateKey],
    },
    oasis: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.INFURA_API_KEY}`,
      accounts: [privateKey],
    },
    arbitrium: {
      url: `https://arbitrum-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [privateKey],
    }
  },
};
