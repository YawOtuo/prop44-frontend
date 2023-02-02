import personlogo from '../images/personlogo.png'

export const AdsProfileMenu = ()=> {
    return(
        <div className="container">
            <div class="row align-items-center justify-content-center mb-5">
                <div className="col-sm-10">
                    <img src={personlogo} alt="" />
                    <h4>Username</h4>
                    <h5>+26158181851</h5>


                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div className="col-sm-10">
                    <p>Message</p>
                    <p>My Ads</p>
                    <p>Settings</p>
                    <p>Payments</p>

                    
                </div>
            </div>
        </div>
    )
}