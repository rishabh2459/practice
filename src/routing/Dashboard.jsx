import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  let obj = {
    key: "Redirected",
  }
  const redirectFunc = () => {
    navigate("/aboutus", {state:obj});
  };
  return (
    <div className='container' style={{backgroundColor: "blue"}}>
        <h2>Dashboard</h2>
        <button onClick={redirectFunc}>Redirect</button>
    </div>
  );
};

export default Dashboard;