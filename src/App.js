import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdsProfileMenu } from './components/AdsProfileMenu';
import './css-files/index.css'
import { AboutUs } from './pages/AboutUs';
import { AdsProfileEdit } from './pages/AdsProdileEdit';
import AdsProfileActiveAds from './pages/AdsProfileActiveAds';
import AdsProfileMain from './pages/AdsProfileMain';
import { AdsScreening } from './pages/AdsScreening';
import { BlogPage } from './pages/Blog';
import { BlogContent1 } from './pages/blog/BlogContent1';

function App()
{
  return (
    <div className="App inter">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<AdsProfileMain />} />

          <Route exact path='/my-ads' element={<AdsProfileMain />} />
          <Route exact path='/profile-menu' element={< AdsProfileMenu />} />

          <Route exact path='/ads' element={<AdsProfileMain />} />
          <Route exact path='/edit-ads' element={<AdsProfileEdit />} />
          <Route exact path='/active-ads' element={<AdsProfileActiveAds />} />
          <Route exact path='/screening-ads' element={<AdsScreening />} />

          <Route exact path='/blog' element={<BlogPage />} />
          <Route exact path='/blog/1' element={< BlogContent1 />} />
          <Route exact path='/about-us' element={< AboutUs />} />





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
