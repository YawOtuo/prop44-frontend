import React from 'react';
import PropTypes from 'prop-types';
import { ActiveAds } from '../components/ActiveAds';
import { AdsProfileMenu } from '../components/AdsProfileMenu';
import ad1 from '../images/pic1-chennai.png'
import ad2 from '../images/pic2.png'
import { Navbar } from '../components/navbar';
//import { Test } from './AdsProfileActiveAds.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const AdsProfileActiveAds = (props) => (
  <div className='container-fluid'>
    <div class="row align-items-center justify-content-center">
      <div className='col-sm-12'>
        <Navbar />
      </div>

    </div>
    <div className='row align-items-start justify-content-center pb-5'>
      <div className='col-sm-3 d-none d-sm-block'>
        <AdsProfileMenu />
      </div>
      <div className='col-sm-9'>
        <div className="container-fluid">
          <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 text-left align-self-center justify-content-center pt-3'>
              <Link to='/ads' className='text-dark'>
                <span className='d-inline '><ArrowBackIcon />
                  <p className='d-inline px-3 font-weight-bold'>Active Ads</p></span>
              </Link>
            </div>
          </div>
          <div class="row align-items-center justify-content-start  mb-0 mb-sm-4">
            <div className='col-sm-10 ads-card'>
              <div className=''>
                <ActiveAds image={ad1} location={'2 BHK APARTMENT FOR RENT IN PORUB, CHENNAI'} />
              </div>
            </div>
          </div>
          <div class="row align-items-center justify-content-start  mb-0 mb-sm-4">
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
