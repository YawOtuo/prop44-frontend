import { Navbar } from '../components/navbar'
import chennai2 from '../images/pic1-chennai2.png'
import map from '../images/sanFransisco-map.png'

export const AdsProfileEdit = () =>
{
    return (
        <div className="container">
            <Navbar/>
            <div className="row align-items-start justify-content-center">
                <div className="col-sm-6">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-6">
                            <img src={chennai2} alt="" className='w-100'/>
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
                </div>
                <div className="col-sm-6">
                    <img src={map} alt="" className='w-100'/>
                </div>
            </div>
        </div>
    )
}