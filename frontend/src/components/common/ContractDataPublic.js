import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import web3 from 'web3';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import initInfura from '../../web3/infuraClient';
import FactoryContractItem from './FactoryContractItem';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props) =>
      props.blue
        ? theme.palette.background.blue
        : theme.palette.background.secondary,
    height: 600,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ContentBlock = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [publicData, setPublicData] = useState([]);

  const classes = useStyles(props);

  useEffect(() => {
    setIsLoading(true);
    initInfura()
      .then(
        ({
          name,
          symbol,
          cost,
          maxSupply,
          maxMintAmount,
          notRevealedURI,
          factoryOwner,
          totalSupply,
          networkId,
        }) => {

          const costEther = web3.utils.fromWei(cost, 'ether');
          setPublicData([
            {
              name,
              symbol,
              costEther,
              maxSupply,
              maxMintAmount,
              notRevealedURI,
              factoryOwner,
              totalSupply,
              networkId,
            },
          ]);
          setIsLoading(false);
        }
      )
      .catch((err) => {
        console.log(err);
        console.error('Failed to fetch contract details from infura.');
      });
  }, []);

  if (isLoading) {
    return (
      <Grid className={classes.root} container>
        <Grid className={classes.title} item xs={12}>
          <LoadingSpinner />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid className={classes.root} container>
      {publicData.map((data) => (
        <FactoryContractItem
          key={data.symbol}
          name={data.name}
          symbol={data.symbol}
          cost={data.costEther}
          maxSupply={data.maxSupply}
          maxMintAmount={data.maxMintAmount}
          notRevealedURI={data.notRevealedURI}
          factoryOwner={data.factoryOwner}
          totalSupply={data.totalSupply}
          networkId={data.networkId}
        />
      ))}
    </Grid>
  );
};

export default ContentBlock;
