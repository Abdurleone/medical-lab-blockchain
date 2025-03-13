require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.28" }
    ]
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8546" // Changed port to 8546
    }
  }
};