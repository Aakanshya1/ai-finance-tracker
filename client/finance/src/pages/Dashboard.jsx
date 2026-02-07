import React from 'react'
import {  useNavigate } from 'react-router-dom';
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));  
  const navigate = useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login');
  }
  return (
    <>
    <p>Welcome to the Dashboard! {user}</p>
    <button onClick={handlelogout} className=' rounded-md px-4 py-3 bg-primary text-white inter font-bold uppercase'>
      Logout
    </button>
    </>
  )
}

export default Dashboard