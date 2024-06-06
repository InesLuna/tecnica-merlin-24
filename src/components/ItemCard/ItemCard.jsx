import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { detailSetActualId } from '../../reducer/detailSlice';
import './itemCard.css';

const ItemCard = (props) => {
  const { podcast, isDetailview } = props;
  const dispatch = useDispatch();

  const imageUrl = isDetailview ? podcast.artworkUrl100 : podcast['im:image'][2].label;
  const title = isDetailview ? podcast.collectionName :  podcast['im:name'].label;
  const author = isDetailview ? podcast.artistName :  podcast['im:artist'].label;
  const id = isDetailview ? podcast.artistId :  podcast.id.attributes['im:id'];

  const handleClick = () => {
    dispatch(detailSetActualId(id));
  };

  return (
    <>
      { podcast && isDetailview ? (
        <div  className='detail-card box-shadow-class'>
          <img src={imageUrl} alt={title} className='detail-card__image' />
          <div className='divider'/>
          <div>
            <p className='detail-card__title roboto-bold'>{title}</p>
            <p className='detail-card__author roboto-regular-italic'>by {author}</p>
          </div>
          <div className='divider'/>
          <div>
            <p className='detail-card__title roboto-bold'>Description</p>
            <p className='detail-card__summary roboto-regular-italic'>
              Cras fringilla ullamcorper lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in tempor enim. Integer molestie sit amet leo sit amet consectetur. Donec sodales ligula ut pretium pulvinar. Curabitur malesuada purus diam, ut aliquam justo consectetur quis. Aenean sit amet tincidunt magna.
            </p>
          </div>
        </div>
      ) : (
        <Link to={`podcast/${id}`} className='landing-card ' onClick={()=>handleClick()}>
          <div className='landing-card__image'>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='landing-card__content box-shadow-class'>
            <p className='landing-card__title roboto-bold'>{title}</p>
            <p className='landing-card__author'>Author: {author}</p>
          </div>
          
        </Link>
      )}
    </>
    
  );
};

export default ItemCard;


