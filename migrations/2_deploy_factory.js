const AdeFactory = artifacts.require("AdeFactory");
const { getNetworkConfig } = require('../migration-config');

module.exports = async function (deployer, network, accounts) {
  const { feeToSetterAddress } = getNetworkConfig(network, accounts);
  await deployer.deploy(AdeFactory, feeToSetterAddress);

  const adeFactory = await AdeFactory.deployed();
  console.log(`INIT_CODE_PAIR_HASH: ${await adeFactory.INIT_CODE_PAIR_HASH()}`)

};
