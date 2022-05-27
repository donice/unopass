import './Navbar.css'
import Logo from '../../static/images/unopass-logo.png'


const Navbar = () => {
    return (
        <div className='navbar' >
                <img src={Logo} alt='logo' className='navbar--logo' />
                <nav>
                    <button className='signin-btn'>Sign in</button>
                    <button className='register-btn'>Register</button>
                </nav>
        </div>
    )

}

export default Navbar;