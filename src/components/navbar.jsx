import { Link } from "react-router-dom"
import navprofile from '../images/navprofile.png'
import proplogo from '../images/prop44-logo.png'
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = (props) =>
{
    return (
        <div class='row  position-sticky align-items-center justify-content-center nav-shadow'>
            <div className='col-sm-12'>
                <nav class={`navbar navbar-light navbar-expand-lg`}>
                    <Link class="navbar-brand " to="">
                        <img src={proplogo} height='50px' width='90px'></img>
                    </Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">

                        <ul class="navbar-nav ml-auto  align-items-center justify-content-center">
                            <li class="nav-item active" >
                                <Link class="nav-link" to="/">Post Ad</Link>
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" to="/" id="navbarDropdownMenuLink">
                                   { 
                                   window.screen.width > 660 ?
                                   <Link to='/my-ads'>
                                   <img src={navprofile} width="90px" height="35px"></img></Link>
                                   :
                                   <Link to='/profile-menu'>
                                    <img src={navprofile} width="100px" height="40px"></img></Link>

                                   }
                                    {/* <PersonIcon color="white"/> */}
                                </Link>

                            </li>


                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    )
}