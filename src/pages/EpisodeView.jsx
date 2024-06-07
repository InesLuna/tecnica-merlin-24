import Header from '../components/Header/Header';
import ItemCard from '../components/ItemCard/ItemCard';
import Episode from '../components/Episode/Episode';
import Loader from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import './pages.css';

const EpisodeView = () => {
    const actualEpisodeState = (state) => state.detailList.actualEpisode;
    const actualEpisode = useSelector(actualEpisodeState);
    const actualPodcastState = (state) => state.detailList.actualPodcast;
    const actualPodcast = useSelector(actualPodcastState);
    const actualLoadingState = (state) => state.detailList.loading;
    const loading = useSelector(actualLoadingState);

    return (
      <div className='page-layout'>
      <Header episodeView actualPodcast={actualPodcast && actualPodcast.length > 0 && actualPodcast} />
      {
        loading ? <Loader/> : (
          <>
            { actualPodcast && actualPodcast.length > 0  && (
              <>
                <section className='detail-layout'>
                  <ItemCard podcast={actualPodcast[0]} isDetailview />
                  <Episode episode={actualEpisode} />
                </section>
              </>
            )}
          </>
        )
      } 
    </div>
  );}
  
  export default EpisodeView;
  