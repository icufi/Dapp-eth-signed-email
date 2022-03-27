// eslint-disable-next-line no-undef
const BonsaiToken = artifacts.require('BonsaiToken');
// eslint-disable-next-line no-undef
const BonsaiToken0xC9 = artifacts.require('BonsaiToken0xC9');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(
    BonsaiToken,

    'BonsaiToken',
    'BT',
    'ipfs://QM583923948392029483',
    'ipfs://Qm49320920283492092',
    {from: accounts[0]}
  );
  deployer.deploy(
    BonsaiToken0xC9,

    'BonsaiToken0xC9',
    'BT0xC9',
    'ipfs://QM5839239483920294C9',
    'ipfs://Qm493209202834920C9',
    { from: accounts[1] }
  );
};
