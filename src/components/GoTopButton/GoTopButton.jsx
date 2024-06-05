import React, { useEffect, useState } from 'react';
import './goTopButton.css'

const GoTopButton = (props) => {
  const { showButton } = props;

      
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button 
      onClick={(e) =>{
        e.preventDefault();
        handleClick();
      }}
      className={`go-top-button ${showButton}`}
    >
      Go Top!
    </button>
  );
};

export default GoTopButton;
