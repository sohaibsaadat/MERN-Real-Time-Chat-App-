import React, { useContext, useEffect } from 'react'
import {AuthContext} from '../context/AuthContext.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Toaster} from 'react-hot-toast'

const App = () => {
  const {authUser} = useContext(AuthContext)
    useEffect(() => {
    AOS.init({
      duration: 1000,   // animation time (ms)
      once: true,       // animation only once
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="bg-center bg-[url('./bgImage.svg')] bg-cover bg-no-repeat ">
     <Toaster/>
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Navigate to="/login"/>}/>
        <Route path='/login' element={!authUser?<Login/>:<Navigate to="/"/>}/>
        <Route path='/profile' element={authUser?<Profile/>:<Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App
