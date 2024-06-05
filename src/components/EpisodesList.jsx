import { Link } from "react-router-dom";
import { detailSetActualEpisode } from '../reducer/detailSlice';

const EpisodeList = (props) => {
    const { episodes, podcastId } = props;
    

    const handleClick = (e) => {
        console.log(e, 'yhe episode')
        dispatch(detailSetActualEpisode(e));
    };

    return (
      <>
      {
        episodes.map((e)=>{
            console.log('episode', e)
            return (
            <Link to={`episode/${e.trackId}`} key={e.trackId} onClick={()=>handleClick(e)}>
                <h2>{e.trackName} </h2>
                <p>{e.releaseDate} </p>
                <p>{e.trackTimeMillis} </p>
            </Link>
        )} )
      }
      </>
    );
  };
  
  export default EpisodeList;