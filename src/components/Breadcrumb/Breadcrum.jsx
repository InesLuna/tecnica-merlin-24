import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './breadcrumb.css';

const Breadcrum = (props) => {

  const { view, podcast } = props;
  const actualEpisodeState = (state) => state.detailList.actualEpisode;
  const actualEpisode = useSelector(actualEpisodeState);

  const[ breadcrumbComponent, setBreadcrumbComponent ] = useState(<Link to='/' className='breadcrumb__link'>Home</Link>)
  
  const homeLink = <Link to='/' className='breadcrumb__link'>Home</Link>;

  useEffect(()=>{
    if(podcast && podcast.length > 0) {
      switch (view) {
        case'generalView':
        setBreadcrumbComponent(<p className='breadcrumb__text'>Home</p>);
          break;
        case'detailView':
          setBreadcrumbComponent(
            <>
              {homeLink} <span className='breadcrumb__separator'>/</span><p className='breadcrumb__text'>{podcast[0].collectionName}</p> 
            </>
            );
          break;
        case'episodeView':
          setBreadcrumbComponent(
            <>
              {homeLink}
              <Link to={`/podcast/${podcast[0].collectionId}`} className='breadcrumb__link'>
                <span className='breadcrumb__separator'>/</span>
                {podcast[0].collectionName}
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
    
  },[podcast]);


  return (
    <div className='breadcrumb'>
      {breadcrumbComponent}
    </div>
  );
};

export default Breadcrum;