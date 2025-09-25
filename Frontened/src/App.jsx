import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CafePage from './pages/CafePage'
import useAuthStore from './Store/UseAuthStore'

function App() {

  const {AuthStore,isLoading}=useAuthStore();
  return (   
   <Routes >
    <Route path='/login' element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path='/' element={<CafePage/>} />
   </Routes>
   
  )
}

export default App
