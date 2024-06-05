import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { detailIdsAdd, detailAdd, loadingSet, detailSetActualProduct, detailSetActualId } from '../reducer/detailSlice';
import { getProductDetails } from '../apiServices/getProductDetails';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import ItemCard from '../components/ItemCard/ItemCard';
import EpisodeList from '../components/EpisodesList';


const DetailView = () => {
  const dispatch = useDispatch();
  const actualProductIdState = (state) => state.detailList.actualId;
  const actualProductId = useSelector(actualProductIdState);
  const actualProductIdsListState = (state) => state.detailList.detailIds;
  const productIdsList = useSelector(actualProductIdsListState);
  const actualProductDetailsListState = (state) => state.detailList.detailList;
  const productDetailsList = useSelector(actualProductDetailsListState);
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);
  const actualLoadingState = (state) => state.detailList.loading;
  const loading = useSelector(actualLoadingState);
  const [ podcastEpisodes, setPodcastEpisodes ] = useState();

  const dataDetails = async (num) => {
    dispatch(loadingSet(true));
    const data = await getProductDetails(num);
    const dataParse = JSON.parse(data);
    if(dataParse.results) {
      console.log(dataParse.results)
      dispatch(loadingSet(false));
      dispatch(detailAdd(dataParse.results));
      dispatch(detailSetActualProduct(dataParse.results));
      dispatch(detailIdsAdd(dataParse.results[0].artistId));
    }
  };

  useEffect(()=>{
    if(actualProduct && actualProduct.length > 0){
      const episodes = actualProduct.filter((p) => p.kind !== 'podcast');
      setPodcastEpisodes(episodes);
    }
  }, [actualProduct]);

  useEffect(()=>{
    if(productIdsList.includes(actualProductId)){ 
      const aux = productDetailsList.filter((p) => p[0].artistId === `${actualProductId}`);
      dispatch(detailSetActualProduct(aux[0]));    
    } else {
      dataDetails(actualProductId)
    }  
  }, [actualProductId]);

  const handleClick = async (e) => {
    e.preventDefault();
  }

  return (

    <div className='bg-stone-50 min-h-screen'>
      <Header detailView />
      {
        loading ? <Loader/> : (
          <>
            { actualProduct && actualProduct.length > 0  ? (
              <section className='flex flex-col md:flex-row justify-center p-6 items-center pb-10'>
                <Link to='/'>la página principal</Link>
                <ItemCard podcast={actualProduct[0]} isDetailview />
                <h2>episodes {actualProduct.length - 1} </h2>
                {podcastEpisodes && podcastEpisodes.length > 0 && <EpisodeList episodes={podcastEpisodes} podcastId={actualProductId} />}
              </section>
            ) : (
              <div className='flex flex-col md:flex-row justify-center p-6 items-center pb-10'>
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
