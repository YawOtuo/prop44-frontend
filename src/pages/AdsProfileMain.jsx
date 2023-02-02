import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../components/navbar';
import { AdsProfileMenu } from '../components/AdsProfileMenu';
import house from '../images/house.png'

const AdsProfileMain = () => (
  <div className='container-fluid'>
    <div class="row align-items-center justify-content-center">
      <div className='col-sm-10'>
        <Navbar />
      </div>

    </div>

    <div className='row align-items-center justify-content-center'>
      <div className='col-sm-3'>
        <AdsProfileMenu />
      </div>
      <div className='col-sm-9'>
        <div className="container-fluid">
          <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 py-3 text-left '>
              <p>My Ads</p>
            </div>
          </div>
          <div class="row align-items-center justify-content-start py-2 text-left">
            <div className='col-sm-5 py-3 ads-card'>
              <p className='pb-5'>Active Ads</p>
              <img src={house} alt="" />

            </div>
            <div className='col-sm-5 py-3 ads-card'>
              <p className='pb-5'>Under Screening</p>
              <img src={house} alt="" />

            </div>
          </div>
          <div class="row align-items-center justify-content-start text-left">
            <div className='col-sm-5 py-3 ads-card'>
              <p className='pb-5'>Expired Ads</p>
              <img src={house} alt="" />

            </div>
            <div className='col-sm-5 py-3 ads-card'>
              <p className='pb-5'>Declined Ads</p>
              <img src={house} alt="" />

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
