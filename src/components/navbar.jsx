import { Link } from "react-router-dom"
import navprofile from '../images/navprofile.png'
import proplogo from '../images/prop44-logo.png'

export const Navbar = (props) =>{ 
    return(
        <div class='row  position-sticky align-content-center justify-content-center  w-100' style={{ zIndex: '30' }}>
        {/* <span className='navtitle font-weight-bold' >THE AFRICAN BULLY REGISTRY</span> */}

        <div className='w-100'>
            <nav class={`navbar navbar-light navbar-expand-lg ${props.navbar_dark}`}>
                <Link class="navbar-brand " to="">
                    <img src={proplogo} height='60px' width='100px'></img>
                    </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                    
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" >
                            <Link class="nav-link"  to="/home">Post AD </Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link"  to="/registration" id="navbarDropdownMenuLink">
                                <img src={navprofile} width="150px" height="60px"></img>
                            </Link>

                        </li>
                        <li class="nav-item active">
                            <Link  class="nav-link" to="/sign_up">Sign Up</Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>

    </div>
    )
}