import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import itemData from './itemData';
import image from '../im.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


 const itemData = [
   {
     img: image,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
   },
   {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 3,
   },
   {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
   },
   {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
   },
 ];
 
export default function BasicImageList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3} style={{height:'auto'}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

