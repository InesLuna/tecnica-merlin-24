import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { detailIdsAdd, detailAdd, loadingSet, detailSetactualPodcast } from '../reducer/detailSlice';
import { getProductDetails } from '../apiServices/getProductDetails';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import ItemCard from '../components/ItemCard/ItemCard';
import EpisodeList from '../components/EpisodesList/EpisodesList';
import './pages.css';


const DetailView = () => {
  const dispatch = useDispatch();
  const actualPodcastIdState = (state) => state.detailList.actualId;
  const actualPodcastId = useSelector(actualPodcastIdState);
  const actualPodcastIdsListState = (state) => state.detailList.detailIds;
  const productIdsList = useSelector(actualPodcastIdsListState);
  const actualPodcastDetailsListState = (state) => state.detailList.detailList;
  const productDetailsList = useSelector(actualPodcastDetailsListState);
  const actualPodcastState = (state) => state.detailList.actualPodcast;
  const actualPodcast = useSelector(actualPodcastState);
  const actualLoadingState = (state) => state.detailList.loading;
  const loading = useSelector(actualLoadingState);
  const [ podcastEpisodes, setPodcastEpisodes ] = useState();

  const dataDetails = async (num) => {
    dispatch(loadingSet(true));
    const data = await getProductDetails(num);
    const dataParse = JSON.parse(data);
    if(dataParse.results) {
      dispatch(loadingSet(false));
      dispatch(detailAdd(dataParse.results));
      dispatch(detailSetactualPodcast(dataParse.results));
      dispatch(detailIdsAdd(dataParse.results[0].artistId));
    }
  };

  useEffect(()=>{
    if(actualPodcast && actualPodcast.length > 0){
      const episodes = actualPodcast.filter((p) => p.kind !== 'podcast');
      setPodcastEpisodes(episodes);
    }
  }, [actualPodcast]);

  useEffect(()=>{
    if(productIdsList.includes(actualPodcastId)){ 
      const aux = productDetailsList.filter((p) => p[0].artistId === `${actualPodcastId}`);
      dispatch(detailSetactualPodcast(aux[0]));    
    } else {
      dataDetails(actualPodcastId)
    }  
  }, [actualPodcastId]);

  return (

    <div className='page-layout'>
      <Header detailView podcast={actualPodcast && actualPodcast.length > 0 && actualPodcast} />
      {
        loading ? <Loader/> : (
          <>
            { actualPodcast && actualPodcast.length > 0  ? (
              <section className='detail-layout'>
                <ItemCard podcast={actualPodcast[0]} isDetailview />
                {podcastEpisodes && podcastEpisodes.length > 0 && <EpisodeList episodes={podcastEpisodes} podcastId={actualPodcastId} />}
              </section>
            ) : (
              <div className='detail-layout'>
                Parece que ha habido un error, vuelve a <Link to='/'>la página principal</Link>
              </div>
            )}
          </>
        )
      } 
    </div>
  );
};

export default DetailView;
