import React from 'react';
import { Typography, Grid, Container } from '@mui/material';

const DescriptionMain = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Typography variant='h2'>WTF?</Typography>
          <Typography>
            Notables is I'm baby adaptogen tbh direct trade art party man braid
            authentic retro fam gastropub woke kinfolk disrupt. Succulents
            pickled truffaut sartorial franzen godard. Meggings gastropub
            affogato hella, tofu master cleanse live-edge raclette put a bird on
            it chartreuse blog roof party. Bushwick slow-carb literally iceland
            messenger bag iPhone migas tousled.
          </Typography>
          <Typography>
            Notables is I'm baby adaptogen tbh direct trade art party man braid
            authentic retro fam gastropub woke kinfolk disrupt. Succulents
            pickled truffaut sartorial franzen godard. Meggings gastropub
            affogato hella.
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Container>
  );
};

export default DescriptionMain;
