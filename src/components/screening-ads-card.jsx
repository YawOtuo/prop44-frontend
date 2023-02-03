import { PropTypes } from "@mui/material"
import { Navbar } from "./navbar"

export const ScreeningAdsCard = (props) =>
{
    return (
        <div className="container-fluid mb-5 ads-card position-relative">
            <div class="row align-items-start justify-content-center position-relative">

                <div className="col-md-4">
                    <img src={props.image} alt="" className="w-100 img-responsive img-fluid" />

                </div>
                <div className="col-md-8 text-left align-items-start 
                justify-content-start pb-5 pt-3">
                    <div>

                        <p className="text-uppercase m-0 mb-2 mb-sm-0 text-left">{props.location}</p>

                        <div className="row align-items-center
                         justify-content-center text-left smaller-font-13 pb-3 pb-sm-0">
                            <p className="m-0">Rent: ${props.rentPrice} &nbsp;</p>
                            <p className="m-0">Maintenance: ${props.maintenance} &nbsp;</p>
                            <p className="m-0">Deposit: ${props.deposit} &nbsp;</p>

                        </div>

                    </div>
                    <p className="smaller-font-13  text-left align-self-end float-end 
                    position-absolute " style={{ 'bottom': '0px' }}>Posted: {props.datePosted}</p>

                </div>

            </div>


        </div>
    )
}

ScreeningAdsCard.defaultProps = {
    location: '2 BHK APARTMENT FOR RENT IN PORUR,CHENNAI',
    rentPrice: 50000,

    maintenance: 20000,
    deposit: 200,
    datePosted: '25 January 2023'

}