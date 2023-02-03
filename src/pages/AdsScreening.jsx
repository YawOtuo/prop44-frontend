import chennai1 from '../images/pic1-chennai.png'
import chennai3 from '../images/chennai3.png'
import chennai4 from '../images/chennai4.png'
import chennai5 from '../images/chennai5.png'


import { ScreeningAdsCard } from "../components/screening-ads-card"
import { Navbar } from '../components/navbar'

export const AdsScreening = () => {
    return (
        <div>
            <Navbar/>
            <div className='px-3 px-sm-0'>
                <div className="row align-items-center
                 justify-content-center mt-4 text-left">
                    <h6 className='text-left mt-1 mb-3'>Screening Ads</h6>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-5 mb-5 mb-sm-0">
                        <ScreeningAdsCard image={chennai1}/>
                    </div>
                    <div className="col-sm-5 mb-5 mb-sm-0">
                        <ScreeningAdsCard image={chennai3}/>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-5 mb-5 mb-sm-0">
                        <ScreeningAdsCard image={chennai4}/>
                    </div>
                    <div className="col-sm-5 mb-5 mb-sm-0">
                        <ScreeningAdsCard image={chennai5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}