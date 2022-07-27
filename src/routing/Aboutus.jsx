import React from 'react'
import { useLocation } from 'react-router-dom'

const Aboutus = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='container' style={{backgroundColor:"yellow"}}>
        <h2>Aboutus</h2>
    </div>
  )
}

export default Aboutus;