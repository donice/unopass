import './Dashboard.css'

const SideNav = () => {
    return (
        <nav className='Dashboard--nav'>
            <div className='Dashboard--nav--info'>

            {/* <i class="fas fa-arrow-to-right"><span></span></i> */}
            <i class="fas fa-bars"></i>

            <p>GENERAL</p>
            <i  class="fas fa-home"><a href='/'>Home</a ></i><br />
            <i class="fas fa-star"><a href='/'>Favorite</a ></i><br />

            <p>ITEMS</p>
            <i class="fas fa-key"><a href='/'>Password</a ></i> <br />
            <i class="fas fa-sticky-note"><a href='/'>Notes</a ></i> <br />
            <i class="fas fa-address-card"><a href='/'>Address</a ></i><br />
            <i class="fas fa-credit-card"><a href='/'>Credit Card</a ></i> <br />
            {/* <i class="fas fa-github"><a href='https://github.com/Donice/unopass' target='_blank'> github</a ></i> */}
            
            <hr />
            <i class="fas fa-sign-out"><a href='/'>Log Out</a ></i>

        </div>
    </nav>
    )
}

export default SideNav;