import React from 'react'
import  NewsCard from '../NewsCard/NewsCard';
// import {Grid, Grow, Typography} from '@mui/material';

const NewsCards = ({articles}) => {
  return (
    <div>
        {articles.map((article,i) => {
            <NewsCard /> 
        })}
    </div>
  )
}

export default NewsCards;