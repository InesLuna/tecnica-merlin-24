import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './breadcrumb.css';

const Breadcrum = (props) => {

  const { view } = props;
  const actualPodcastState = (state) => state.detailList.actualPodcast;
  const actualPodcast = useSelector(actualPodcastState);
  const actualEpisodeState = (state) => state.detailList.actualEpisode;
  const actualEpisode = useSelector(actualEpisodeState);

  const[ breadcrumbComponent, setBreadcrumbComponent ] = useState(<Link to='/' className='breadcrumb__link'>Home</Link>)
  
  const homeLink = <Link to='/' className='breadcrumb__link'>Home</Link>;

  useEffect(()=>{
    console.log(actualEpisode, 'bread')
    if(actualPodcast && actualPodcast.length > 0) {
      switch (view) {
        case'generalView':
        setBreadcrumbComponent(<p className='breadcrumb__text'>Home</p>);
          break;
        case'detailView':
          setBreadcrumbComponent(
            <>
              {homeLink} <span className='breadcrumb__separator'>/</span><p className='breadcrumb__text'>{actualPodcast[0].collectionName}</p> 
            </>
            );
          break;
        case'episodeView':
          setBreadcrumbComponent(
            <>
              {homeLink}
              <Link to={`/podcast/${actualPodcast[0].collectionId}`} className='breadcrumb__link'>
                <span className='breadcrumb__separator'>/</span>
                {actualPodcast[0].collectionName}
              </Link>
              <span className='breadcrumb__separator'>/</span>
              <p className='breadcrumb__text'>{actualEpisode.trackName}</p> 
            </>
            );
          break;
        default:
          setBreadcrumbComponent(<Link to='/' className='breadcrumb__link'>Home</Link>);
      }
    }
    
  },[actualPodcast]);


  return (
    <div className='breadcrumb'>
      {breadcrumbComponent}
    </div>
  );
};

export default Breadcrum;