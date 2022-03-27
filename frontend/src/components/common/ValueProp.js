import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import theme from '../../Styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props) =>
      props.secondary
        ? theme.palette.background.secondary
        : theme.palette.primary.default,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
}));

const ValueProp = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid  xs={12} md={6} item>
            <Typography variant='h1'>{props.valueText}</Typography>
          </Grid>
          <Grid xs={12} md={6} item>
            <img
              className={classes.img}
              src={
                'https://pbs.twimg.com/media/D05q7YHWsAE3_sw?format=png&name=small'
              }
              alt='bonsai tree'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ValueProp;
