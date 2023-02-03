import { Link } from "react-router-dom"

export const BlogCard = (props) => {
    return(
        <div className="container-fluid ads-card p-3 text-left">
            <Link to={props.link} className='text-dark'>
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-12">
                        <img src={props.image} alt="" className="w-100 " />
                        </div>
                </div>
                <div className="row align-items-center justify-content-center pt-3 pb-5">
                    <div className="col-sm-12">
                        {props.title}
                    </div>
                </div>
                <div className="row align-items-end justify-content-end px-3">
                    <div className="col-sm-">
                        <p className="smaller-font-13">{props.date}</p>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

BlogCard.defaultProps = {
    date: '23rd Jan 2023',
    link: '/blog/1'
}