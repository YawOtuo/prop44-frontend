import { Link } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import chennai2 from '../images/pic1-chennai2.png'
import map from '../images/sanFransisco-map.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const AdsProfileEdit = () =>
{
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row align-items-start justify-content-center  px-4">
                <div className="col-sm-6">
                    <div class="row align-items-start justify-content-start py-3">
                        <div className='col-sm-10 text-left'>
                            <Link to='/my-ads' className='text-dark'>
                                <span className='d-inline '><ArrowBackIcon />
                                    <p className='d-inline px-3 font-weight-bold'>Active Ads</p></span>
                            </Link>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center text-left">
                        <div className="col-sm-6">
                            <img src={chennai2} alt="" className='w-100' />
                            <p className='pt-3 smaller-font-13'>You can upload video (.mp4, .mkv, .3gp, .webm) and images (.jpg, .png).
                                Max 5 files.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="location">Enter Location</label>
                                    <input name='location' value=""
                                        type="text" class="form-control"
                                        id="location" placeholder="Location"></input>
                                </div>

                            </div>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="city">City</label>
                                    <input name='city' value=""
                                        type="text" class="form-control"
                                        id="city" placeholder="City"></input>
                                </div>

                            </div>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="country">Country</label>
                                    <input name='country' value=""
                                        type="text" class="form-control"
                                        id="country" placeholder="Country"></input>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='row align-items-center justify-content-center text-left'>
                        <div className='col-sm-6'>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="title">Title</label>
                                    <input name='title' value=""
                                        type="text" class="form-control"
                                        id="title" placeholder="Title"></input>
                                </div>

                            </div>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="title">Rent</label>
                                    <input name='rent' value=""
                                        type="text" class="form-control"
                                        id="rent" placeholder="Rent"></input>
                                </div>

                            </div>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="title">Maintenance</label>
                                    <input name='maintenance' value=""
                                        type="text" class="form-control"
                                        id="maintenance" placeholder="Maintenance"></input>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="title">Description</label>
                                    <input name='description' value=""
                                        type="text" class="form-control"
                                        id="description" placeholder="Description"></input>
                                </div>

                            </div>
                            <div className='form-row'>
                                <div class="form-group ">
                                    <label for="title">Deposit</label>
                                    <input name='deposit' value=""
                                        type="text" class="form-control"
                                        id="deposit" placeholder="Deposit"></input>
                                </div>

                            </div>
                            <button className='btn btn-dark
                            px-4 my-2 d-none d-sm-inline'>Update</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={map} alt="" className='w-100' height={'40%'} width={'10%'} />
                    <button className='btn btn-dark my-5 d-inline
                    px-5 d-sm-none'>Update</button>

                </div>
            </div>
        </div>
    )
}