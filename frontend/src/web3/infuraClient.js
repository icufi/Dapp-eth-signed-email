import Web3 from 'web3';

import bonsaiTokenBuild from '../contracts/BonsaiToken0xC9.json';



const initInfura = async () => {

  const provider = new Web3.providers.HttpProvider(
    process.env.INFURA_RINKEBY
  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const nftFactory = new web3.eth.Contract(
    bonsaiTokenBuild.abi,
    bonsaiTokenBuild.networks[networkId].address
  );

  const name = await nftFactory.methods.name().call();
  const symbol = await nftFactory.methods.symbol().call();
  const cost = await nftFactory.methods.cost().call();
  const maxSupply = await nftFactory.methods.maxSupply().call();
  const maxMintAmount = await nftFactory.methods.maxMintAmount().call();
  const notRevealedURI = await nftFactory.methods.notRevealedUri().call();
  const factoryOwner = await nftFactory.methods.owner().call();
  const totalSupply = await nftFactory.methods.totalSupply().call();

  return {name, symbol, cost, maxSupply, maxMintAmount, notRevealedURI, factoryOwner, totalSupply, networkId};
};
export default initInfura;
