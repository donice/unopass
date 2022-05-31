import './Navbar.css'
import Logo from '../../static/images/unopass-logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar' >
                <img src={Logo} alt='logo' className='navbar--logo' />
                <nav>
                    <Link to='/signin'><button className='signin-btn'>Sign In</button></Link> 
                    <Link to='/register'><button className='register-btn'>Register</button></Link>
                </nav>
        </div>
    )

}

export default Navbar;