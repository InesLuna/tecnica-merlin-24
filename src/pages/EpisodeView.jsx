import Header from '../components/Header/Header';
import ItemCard from '../components/ItemCard/ItemCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const EpisodeView = (props) => {
    const actualEpisodeState = (state) => state.detailList.actualEpisode;
    const actualEpisode = useSelector(actualEpisodeState);

    useEffect(()=> {
        console.log(actualEpisode)
    },[actualEpisode])

    return (
    <>
      {/* <Header errorView/> */}
      <Link to='/'>la página principal</Link>
      <div className='min-w-full min-h-full flex items-center justify-center flex-col'>
        <p className='text-anton text-3xl text-teal-500 '>Parece que ha habído un error,</p>
        <p className='text-anton text-3xl text-amber-400 '>so sorry!</p>
      </div>
      
    </>
  );}
  
  export default EpisodeView;
  