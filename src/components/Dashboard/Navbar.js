import './Dashboard.css'
// import Logo from '../../static/images/favicon-white.png'
import LogoText from '../../static/images/unopass-logo.png'



const Navbar = () => {

    return (
        <div>
            {/* Horizontal Nav  */}
            <div className='Dashboard--navbar' >
                <img src={LogoText} alt='logo' className='Dashboard--navbar--logo' />
                <input type="text" id="fname" name="fname" placeholder="Search" />
                <nav className='Dashboard--navbar--button'>
                    <button className='addItem-btn'><i class="fas fa-plus" />add items</button>
                </nav>
            </div>

            {/* -------------- */}
    
        </div>
    )
}

export default Navbar;