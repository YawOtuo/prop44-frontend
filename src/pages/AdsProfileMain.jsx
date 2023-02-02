import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../components/navbar';
import { AdsProfileMenu } from '../components/AdsProfileMenu';


const AdsProfileMain = () => (
  <div className='container-fluid'>
    <div class="row align-items-center justify-content-center">
      <div className='col-sm-10'>
        <Navbar />
      </div>

    </div>

    <div className='row align-items-center justify-content-center'>
      <div className='col-sm-4'>
        <AdsProfileMenu />
      </div>
      <div className='col-sm-8'>
        <div className="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div className='col-sm-2'>
              <h3>My Ads</h3>
            </div>
          </div>
          <div class="row align-items-center justify-content-center">
            <div className='col-sm-5'>
              <h3>Active Ads</h3>
            </div>
            <div className='col-sm-5'>
              <h3>Under Screening</h3>
            </div>
          </div>
          <div class="row align-items-center justify-content-center">
            <div className='col-sm-5'>
              <h3>Expired Ads</h3>
            </div>
            <div className='col-sm-5'>
              <h3>Declined Ads</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

AdsProfileMain.propTypes = {
  // bla: PropTypes.string,
};

AdsProfileMain.defaultProps = {
  // bla: 'test',
};

export default AdsProfileMain;
