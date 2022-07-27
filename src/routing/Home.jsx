import React from 'react';
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='container'>
        <h2>Home</h2>
        <h4>{location?.state?.msg}</h4>
    </div>
  )
}

export default Home;