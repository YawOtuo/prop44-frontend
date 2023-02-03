import { Link } from 'react-router-dom'
import personlogo from '../images/personlogo.png'
import { Navbar } from './navbar'

export const AdsProfileMenu = ()=> {
    return(
        <div className="container border-ads-menu-right view_height_100 ">
            <div className='d-inline d-sm-none'>
                <Navbar/>
            </div>
            <div class="row align-items-center justify-content-center mb-5 mt-5 mt-sm-0">
                <div className="col-sm-10">
                    <img src={personlogo} alt="" width={'50%'} className='mb-2 mt-3'/>
                    <h5 style={{'fontWeight': 500}} className='mb-1 pt-3 pt-sm-0'>Username</h5>
                    <p>+26158181851</p>


                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div className="col-10 col-sm-10 text-left">
                    <p>Message</p>
                    <Link to='/my-ads' className='text-dark' ><p>My Ads</p></Link>
                    <p>Settings</p>
                    <p>Payments</p>

                    
                </div>
            </div>
        </div>
    )
}