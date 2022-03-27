import { useState, useCallback, useEffect } from 'react';
import detectProvider from '@metamask/detect-provider';
import Web3 from 'web3';

import bonsaiTokenBuild2 from '../../contracts/BonsaiToken0xC9.json';


export const useAuth = () => {
  const [provider, setProvider] = useState({});
  const [currentAccount, setCurrentAccount] = useState('');
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      });
    }
  });

  const detect = useCallback(async () => {
    const provider = await detectProvider();
    setProvider(provider);
    setCurrentAccount(provider.selectedAddress);
  }, []);

  useEffect(() => {
    if (provider.selectedAddress) {
    const init = async () => {
      const web3 = new Web3(provider);
      const address = provider.selectedAddress;
      try {
        const networkId = await web3.eth.net.getId();

        const nftFactory = new web3.eth.Contract(
          bonsaiTokenBuild2.abi,
          bonsaiTokenBuild2.networks[networkId].address
        );

        const name = await nftFactory.methods.name().call();
        const symbol = await nftFactory.methods.symbol().call();
        const costWei = await nftFactory.methods.cost().call();
        const cost = web3.utils.fromWei(costWei, 'ether');
        const maxSupply = await nftFactory.methods.maxSupply().call();
        const maxMintAmount = await nftFactory.methods.maxMintAmount().call();
        const notRevealedURI = await nftFactory.methods.notRevealedUri().call();
        const factoryOwner = await nftFactory.methods.owner().call();
        const totalSupply = await nftFactory.methods.totalSupply().call();
        const tokensOwnedByUser = await nftFactory.methods
          .walletOfOwner(address)
          .call();

        setWalletData([
          {
            name,
            symbol,
            cost,
            maxSupply,
            maxMintAmount,
            notRevealedURI,
            factoryOwner,
            totalSupply,
            address,
            tokensOwnedByUser,
            networkId,
          },
        ]);
      } catch (err) {
        console.log(err);
        console.error('Error fetching contract details with metamask.');
      }
    };
    init();
  }
  }, [provider]);


  const checkWalletIsConnected = useCallback(async () => {
    const { ethereum } = window;

    if (
      typeof window === 'undefined' ||
      typeof window.ethereum === 'undefined'
    ) {
      console.log('Make sure you have Metamask installed!');
      return;
    } else {
      console.log('Wallet exists. Ready to connect.');
    }
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Found an account! Address: ', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }, []);



  return {
    checkWalletIsConnected,
    provider,
    detect,
    currentAccount,
    walletData,
  };
};
