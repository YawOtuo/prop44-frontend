import personlogo from '../images/personlogo.png'

export const AdsProfileMenu = ()=> {
    return(
        <div className="container border-ads-menu-right view_height_100 ">
            <div class="row align-items-center justify-content-center mb-5">
                <div className="col-sm-10">
                    <img src={personlogo} alt="" width={'50%'} className='mb-2 mt-3'/>
                    <h5 style={{'fontWeight': 500}} className='mb-1'>Username</h5>
                    <p>+26158181851</p>


                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div className="col-sm-10 text-left">
                    <p>Message</p>
                    <p>My Ads</p>
                    <p>Settings</p>
                    <p>Payments</p>

                    
                </div>
            </div>
        </div>
    )
}