
import './App.css'
import React from 'react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import {Routes, Route} from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </>
  )
}

export default App
