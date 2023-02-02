export const AdsProfileEdit = () =>
{
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-6">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-6">
                            <img src="" alt="" />
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
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}