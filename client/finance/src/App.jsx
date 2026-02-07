
import './App.css'
import React from 'react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import MainLayout from './components/Layouts/MainLayout.jsx'
import { Navigate } from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} />
      </Routes>
      
    </>
  )
}

export default App
