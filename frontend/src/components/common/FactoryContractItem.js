import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const FactoryContractItem = (props) => {
  const classes = useStyles(props);
    return (
      <Grid className={classes.root} container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h4">Factory Name: {props.name}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Factory Symbol: {props.symbol}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Cost per token minted: {props.cost}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Max Supply of Tokens: {props.maxSupply}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Max mint amount per mint: {props.maxMintAmount}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">No Revealed URI: {props.notRevealedURI}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Facotry Owner Address: {props.factoryOwner}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Total supply: {props.totalSupply}</Typography>
        </Grid>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h6">Network Id: {props.networkId} -- INFURA</Typography>
        </Grid>

      </Grid>
    );
};


export default FactoryContractItem;
