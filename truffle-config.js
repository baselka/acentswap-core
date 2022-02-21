const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "be6c6b3b4445430ebeacf3c63136ebaf";
const mnemonic = "release neglect shed rug carry sheriff mansion sleep exhibit truly black photo";

module.exports = {
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/be6c6b3b4445430ebeacf3c63136ebaf"),
      network_id: 1,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    acent: {
      provider: () => new HDWalletProvider(mnemonic, "http://3.37.4.143:8545"),
      network_id: 8899,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    acenttest: {
      provider: () => new HDWalletProvider(mnemonic, "http://testsk.acent.online:8647"),
      network_id: 3060,
      gas: 40000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/3fbdf4dbf8004fcdbdcbe9cf83097849"),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },    
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/be6c6b3b4445430ebeacf3c63136ebaf"),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/be6c6b3b4445430ebeacf3c63136ebaf"),
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {
    // "timeout": 100000,
  },

  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}