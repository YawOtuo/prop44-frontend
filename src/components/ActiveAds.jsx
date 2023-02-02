import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditIcon from '@mui/icons-material/Edit';

export const ActiveAds = (props) =>
{
    return (
        <div className="container-fluid py-3 my-4 mb-5 mb-sm-0 pb-2 pb-sm-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-4">
                    <img src={props.image} alt="" className="w-100" />
                </div>
                <div className="col-sm-7 text-left">
                    <p className="m-0 mb-2 smaller-font-24 mt-4 mt-sm-0">{props.location}</p>
                    <div className="smaller-font-20 mb-3 ">
                        <p className="m-0">Rent:<span className="font-weight-bold"> $10000</span></p>
                        <p className="m-0">Maintenace: <span className="font-weight-bold"> $10000</span></p>
                        <p className="m-0 mb-2">Deposit: <span className="font-weight-bold"> $10000</span></p>


                    </div>

                    <div className='row align-items-end justify-content-center'>
                        <div className='col-sm-10'>
    
                            <p className="m-0 smaller-font-13">Posted: 25 January 2023</p>
                            <p className="m-0 smaller-font-13">Expired at: 25 March 2023</p>
                            <p className="m-0 smaller-font-13">Updated: 25 January 2023</p>
                        </div>
                        <div className='col-sm-2 '>
                           <div className='row align-items-start justify-content-end'>
                                <span className='d-inline'><DeleteTwoToneIcon /></span>
                                <span className='d-inline'><EditIcon /></span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}