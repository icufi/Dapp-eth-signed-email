import React from 'react';
import { Typography, Grid, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container sx={{ marginTop: 15, marginBottom: 3 }}>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={1}>
          <Typography variant='h6'>  <a
            style={{ textDecoration: 'none', color: '#212529' }}
            href='https://twitter.com'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a></Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant='h6'>  <a
            style={{ textDecoration: 'none', color: '#212529' }}
            href='https://discord.com'
            target='_blank'
            rel='noreferrer'
          >
            Discord
          </a></Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant='h6'>  <a
            style={{ textDecoration: 'none', color: '#212529' }}
            href='https://etherscan.com'
            target='_blank'
            rel='noreferrer'
          >
            Etherscan
          </a></Typography>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
