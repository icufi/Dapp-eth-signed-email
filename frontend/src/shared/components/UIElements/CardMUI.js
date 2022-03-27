import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({token}) {
console.log(token)
      return (
        <Card sx={{ minWidth: 275, maxWidth: 900 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >

            </Typography>
            <Typography variant='h5' component='div'>
              {token.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Token number {token}
            </Typography>
            <Typography variant='body2'>
              Owned by {token.address}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      );

}
