

export const ActiveAds = (props) =>
{
    return (
        <div className="container-fluid py-3 my-4">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-4">
                    <img src={props.image} alt="" className="w-100"/>
                </div>
                <div className="col-sm-7 text-left">
                    <h5 className="m-0">{props.location}</h5>
                    <p className="m-0">Rent: $10000</p>
                    <p className="m-0">Maintenace: $20000</p>
                    <p className="m-0">Deposit: $20000</p>

                    <p className="m-0">Posted: 25 January 2023</p>
                    <p className="m-0">EXpired at: 25 March 2023</p>
                    <p className="m-0">Updates: 25 January 2023</p>
                </div>
            </div>
        </div>
    )
}