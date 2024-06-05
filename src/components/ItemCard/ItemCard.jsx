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
        <div  className='detail-card'>
          <img src={imageUrl} alt={title} />
          <p className='font-roboto font-bold text-xl text-stone-900 mt-6'>{title}</p>
          <p className='font-roboto text-lg text-stone-800 mt-3'>{author}</p>
        </div>
      ) : (
        <Link to={`podcast/${id}`} className='landing-card' onClick={()=>handleClick()}>
          <div className='landing-card__image'>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='landing-card__content'>
            <p className='landing-card__title font-bold text-xl text-stone-900 mt-6'>{title}</p>
            <p className='landing-card__author text-lg text-stone-800 mt-3'>Author: {author}</p>
          </div>
          
        </Link>
      )}
    </>
    
  );
};

export default ItemCard;


