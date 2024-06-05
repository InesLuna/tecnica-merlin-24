import React from 'react';
import { Link } from "react-router-dom";
 import './logo.css';


const Logo = () => {
  return (
    <Link to='/' className='logo'>Podcaster</Link>
  );
};

export default Logo;
