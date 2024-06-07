import './episode.css';

const Episode = (props) => {
    const { episode } = props;

    return (
      <div className="episode box-shadow-class">
        <p className="roboto-bold">{episode.trackName} </p>
        <p className="roboto-regular-italic">{episode.description}</p>
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3" className="episode__audio"></audio>
      </div>
    );
  };
  
  export default Episode;