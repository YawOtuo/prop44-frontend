import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdsProfileMenu } from './components/AdsProfileMenu';
import './css-files/index.css'
import { AdsProfileEdit } from './pages/AdsProdileEdit';
import AdsProfileActiveAds from './pages/AdsProfileActiveAds';
import AdsProfileMain from './pages/AdsProfileMain';
import { AdsScreening } from './pages/AdsScreening';

function App()
{
  return (
    <div className="App inter">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<AdsProfileMain />} />'    

        <Route exact path='/my-ads' element={<AdsProfileMain />} />'    
        <Route exact path='/profile-menu' element={< AdsProfileMenu />} />

          <Route exact path='/ads' element={<AdsProfileMain />} />
          <Route exact path='/edit-ads' element={<AdsProfileEdit />} />
          <Route exact path='/active-ads' element={<AdsProfileActiveAds />} />
          <Route exact path='/screening-ads' element={<AdsScreening />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
