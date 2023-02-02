import { Link } from "react-router-dom"

export const Navbar = (props) =>{ 
    return(
        <div class='row  position-sticky align-content-center justify-content-center  w-100' style={{ zIndex: '30' }}>
        {/* <span className='navtitle font-weight-bold' >THE AFRICAN BULLY REGISTRY</span> */}

        <div className='w-100'>
            <nav class={`navbar navbar-light navbar-expand-lg ${props.navbar_dark}`}>
                <Link class="navbar-brand " to="">
                    {/* <img src={logo1} height='60px' width='60px'></img> */}
                    </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                    
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" >
                            <Link class="nav-link"  to="/home">Home </Link>
                        </li>


                        <li class="nav-item active">
                            <Link class="nav-link"  to="/community">Community</Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link"  to="/breeds">Breeds</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link"  to="/registration" id="navbarDropdownMenuLink">Register Dog
                            </Link>

                        </li>
                        <li class="nav-item active">
                            <Link  class="nav-link" to="/sign_up">Sign Up</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to='/login'  class="nav-link" onClick={props.toggle_login}>Login</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link"  to="/profile">Profile</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link"  to="/search-page">
                                <i class="fa fa-search p-0 m-0" style={{ "font-size": "15px", "width": "10px" }}></i>
                            </Link>

                            {/* Add a tooltip to this place */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
    )
}