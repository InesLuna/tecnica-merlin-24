import { Link } from "react-router-dom";
import { detailSetActualEpisode } from '../../reducer/detailSlice';
import {dateFormatter, milliSecondsFormat } from '../../utils/formatters';
import { useDispatch } from 'react-redux';
import './episodesList.css';

const EpisodeList = (props) => {
    const { episodes } = props;
    const dispatch = useDispatch();

    const handleClick = episode => {
      dispatch(detailSetActualEpisode(episode));
    };

    return (
      <div className="episodes">
        <h2 className="episodes__title box-shadow-class">Episodes {episodes.length} </h2>
        <div className="episodes__wrapper box-shadow-class">
          <div className="episodes__episode">
            <p className="roboto-bold">Title</p>
            <p className="roboto-bold">Date</p>
            <p className="roboto-bold episodes__track-duration">Duration</p>
          </div>
          {
            episodes.map((episode, i)=>{
              const formatedDate = dateFormatter(episode.releaseDate);
              const fromatedMillis = episode.trackTimeMillis ? milliSecondsFormat(episode.trackTimeMillis) : 'Unknown';
              const backgroundColorClass = i%2 === 0 ? 'background-grey' : 'background-white';
              return (
              <Link className={`episodes__episode ${backgroundColorClass}`} to={`episode/${episode.trackId}`} key={episode.trackId} onClick={()=>handleClick(episode)}>
                <p className="episodes__track-name roboto-bold">{episode.trackName} </p>
                <p>{formatedDate} </p>
                <p className="episodes__track-duration">{fromatedMillis} </p>
              </Link>
            )} )
          }
        </div>
      </div>
    );
  };
  
  export default EpisodeList;