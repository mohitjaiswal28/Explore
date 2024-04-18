
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Explore from './pages/Explore';
import Navbar from './layouts/Navbar';
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Route path='/' element={<Home />}></Route>
        <Route Route path='/aboutus' element={<AboutUs />}></Route>
        <Route Route path='/explore' element={<Explore />}></Route>
        {/* <Route Route path='/explore/:id' element={<People />}></Route> */}
      </Routes>
    </>
  );
}

