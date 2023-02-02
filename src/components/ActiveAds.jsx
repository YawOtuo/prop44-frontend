
export const ActiveAds = (props) =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-3">
                    <img src="" alt="" />
                </div>
                <div className="col-sm-7">
                    <h5>{props.location}</h5>
                    <p>Rent: $10000</p>
                    <p>Maintenace: $20000</p>
                    <p>Deposit: $20000</p>

                    <p>Posted: 25 January 2023</p>
                    <p>EXpired at: 25 March 2023</p>
                    <p>Updates: 25 January 2023</p>
                </div>
            </div>
        </div>
    )
}