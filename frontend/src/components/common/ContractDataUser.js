import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';
import ContractItem from './ContractItem';

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
  const {walletData} = useContext(AuthContext);

  const classes = useStyles(props);

  if (walletData.length === 0) {
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
      {walletData.map((data) => (
        <ContractItem
          key={data.symbol}
          name={data.name}
          symbol={data.symbol}
          cost={data.cost}
          maxSupply={data.maxSupply}
          maxMintAmount={data.maxMintAmount}
          notRevealedURI={data.notRevealedURI}
          factoryOwner={data.factoryOwner}
          totalSupply={data.totalSupply}
          address={data.address}
          tokensOwnedByUser={data.tokensOwnedByUser}
          networkId={data.networkId}
        />
      ))}
    </Grid>
  );
};

export default ContentBlock;
