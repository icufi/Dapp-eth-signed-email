import * as React from 'react';
import {ImageList, ImageListItem, Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {

    width: '100%',
    height: 270,
    [theme.breakpoints.down('sm')]: {
      width: '11%',
      height: 350,
    },
  },
}));

export default function StandardImageList() {
  const classes = useStyles();

  return (

    <ImageList className={classes.root}  cols={6}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.redd.it/2cmwtrej0hc51.png',
    title: 'Breakfast',
  },
  {
    img: 'https://i.redd.it/qqoh3hrbovl01.png',
    title: 'Burger',
  },
  {
    img: 'https://i.pinimg.com/originals/41/68/ef/4168ef4641a7efc30d6f9a7e0ae414c3.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.pinimg.com/originals/9d/af/cb/9dafcb79a33472d279e39b7766a009fc.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.pinimg.com/originals/3c/bf/b9/3cbfb917dea6cecc67b3573c8ae7095d.png',
    title: 'Hats',
  },
  {
    img: 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/6e9a937c3bc1fd4.png',
    title: 'Honey',
  },

];
