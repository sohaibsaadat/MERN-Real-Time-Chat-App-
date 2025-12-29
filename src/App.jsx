import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,   // animation time (ms)
      once: true,       // animation only once
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="bg-center bg-[url('./src/assets/bgImage.svg')] bg-cover bg-no-repeat ">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
