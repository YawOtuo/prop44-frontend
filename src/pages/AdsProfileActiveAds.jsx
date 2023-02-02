import React from 'react';
import PropTypes from 'prop-types';
import { ActiveAds } from '../components/ActiveAds';
import { AdsProfileMenu } from '../components/AdsProfileMenu';
import ad1 from '../images/pic1-chennai.png'
import ad2 from '../images/pic2.png'
import { Navbar } from '../components/navbar';
//import { Test } from './AdsProfileActiveAds.styles';

const AdsProfileActiveAds = (props) => (
  <div className=''>
    <Navbar/>
    <div className='row align-items-start justify-content-center'>
      <div className='col-sm-4'>
        <AdsProfileMenu />
      </div>
      <div className='col-sm-8'>
        <div className="container-fluid">
        <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 text-left'>
              <h3>Active Ads</h3>
            </div>
          </div>
          <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 ads-card'>
              <div>
                <ActiveAds image={ad1} location={'2 BHK APARTMENT FOR RENT IN PORUB, CHENNAI'} />
              </div>
            </div>
          </div>
          <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 ads-card'>
              <div>
                <ActiveAds image={ad2} location={'2 BHK APARTMENT FOR RENT IN hIRANANDANI, RODAS'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AdsProfileActiveAds.propTypes = {
  // bla: PropTypes.string,
};

AdsProfileActiveAds.defaultProps = {
  // bla: 'test',
};

export default AdsProfileActiveAds;
