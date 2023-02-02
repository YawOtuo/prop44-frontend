import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css-files/index.css'
import { AdsProfileEdit } from './pages/AdsProdileEdit';
import AdsProfileActiveAds from './pages/AdsProfileActiveAds';
import AdsProfileMain from './pages/AdsProfileMain';

function App()
{
  return (
    <div className="App inter">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<AdsProfileMain />} />

          <Route exact path='/ads' element={<AdsProfileMain />} />
          <Route exact path='/edit-ads' element={<AdsProfileEdit />} />
          <Route exact path='/active-ads' element={<AdsProfileActiveAds />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
