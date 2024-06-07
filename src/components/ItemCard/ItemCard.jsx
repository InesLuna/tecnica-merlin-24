import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { detailSetActualId } from '../../reducer/detailSlice';
import './itemCard.css';
import { useEffect, useState } from "react";

const ItemCard = (props) => {
  const { podcast, isDetailview } = props;
  const dispatch = useDispatch();
  const podcastListSelector = (state) => state.list.value;
  const podcastList = useSelector(podcastListSelector);
  const [ summary, setSummary ] = useState('');

  const getSummary = () => {
    const podcastInList = podcastList.filter((p)=> {
      return p['im:name'].label === podcast.collectionName
    });
    return podcastInList;
  };

  useEffect(()=> {
    if(podcastList && podcast && isDetailview) {
      const podcastInList = getSummary();
      if(podcastInList)setSummary(podcastInList[0].summary.label);
    }
  }, [podcastList, podcast, isDetailview])

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
              {summary}
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


