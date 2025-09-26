import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {useEffect,useState} from 'react'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LandingPage from './pages/LandingPage'
import useAuthStore from './Store/UseAuthStore'

function App() {

  const {checkAuth,isCheckingAuth,AuthUser}=useAuthStore();
  useEffect (()=>{
     checkAuth();
  },[checkAuth])
  console.log({AuthUser});
  
  return (   
   <Routes >
    <Route path='/login' element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path='/' element={<LandingPage/>} />
   </Routes>
   
  )
}

export default App
