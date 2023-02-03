import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../components/navbar';
import { AdsProfileMenu } from '../components/AdsProfileMenu';
import house from '../images/house.png'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from 'react-router-dom';


const AdsProfileMain = () => (
  <div className='container-fluid'>
    <div class="row align-items-center justify-content-center">
      <div className='col-sm-12'>
        <Navbar />
      </div>

    </div>

    <div className='row align-items-start justify-content-center'>
      <div className='col-sm-3 d-none d-sm-block'>
        <AdsProfileMenu />
      </div>
      <div className='col-sm-9 smaller-font-24'>
        <div className="container-fluid">
          <div class="row align-items-center justify-content-start">
            <div className='col-sm-10 pt-3  text-left '>
              <p className='font-weight-bold'>My Ads</p>
            </div>
          </div>
          <div class="row align-items-center justify-content-start py-2 text-left">
            <div className='col-sm-5 py-3 ads-card mr-2 px-4 mb-4 mb-sm-0'>
              <Link to='/active-ads' >
                <div className='text-dark'>

                  <p className='pb-4'>Active Ads</p>
                  <span><img src={house} alt="" width={'10%'} /> <span className='font-weight-bold mx-1'>{5}</span></span>

                  <p className='float-right m-0' ><ChevronRightOutlinedIcon /></p>
                </div>
              </Link>

            </div>
            <div className='col-sm-5 py-3 ads-card px-4 mb-4 mb-sm-0'>
            <Link to='/screening-ads' className='text-dark'>
              <p>
                  <p className='pb-4'>Under Screening</p>
                  <span><img src={house} alt="" width={'10%'} /> <span className='font-weight-bold mx-1'>{5}</span></span>
                  <p className='float-right m-0' ><ChevronRightOutlinedIcon /></p>
  
              </p> 
            </Link> 
            </div>
          </div>
          <div class="row align-items-center justify-content-start text-left">
            <div className='col-sm-5 py-3 ads-card px-4 mr-2 mb-4 mb-sm-0'>
              <p className='pb-4'>Expired Ads</p>
              <span><img src={house} alt="" width={'10%'} /> <span className='font-weight-bold mx-1'>{5}</span></span>
              <p className='float-right m-0' ><ChevronRightOutlinedIcon /></p>

            </div>
            <div className='col-sm-5 py-3 ads-card px-4 mb-4 mb-sm-0'>
              <p className='pb-4'>Declined Ads</p>
              <span><img src={house} alt="" width={'10%'} /> <span className='font-weight-bold mx-1'>{5}</span></span>
              <p className='float-right m-0' ><ChevronRightOutlinedIcon /></p>

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
