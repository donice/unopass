import './Sign-in.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
// import Navbar from '../Navbar/Navbar'

const SignIn = () => {
    return (
        <section>
            
            <div className='SignIn'>
                <div className='SignIn-side-bar'>
                    <img src={Favicon} alt='favicon' />
                    <h1>Welcome <br />
                        Back, <br />
                        Chief. <br />
                    </h1>
                    <p>You'd never have to worry about the security <br />
                     of your accounts, ever again. <br />
                     Start today, with a click
                    </p>
                </div>
                <div className='SignIn--form'>
                    <nav className='SignIn--navbar' >   
                    <img src={Favicon} alt='favicon' className='SignIn-navbar--favicon' />
                        <img src={Logo} alt='logo' className='SignIn--navbar--logo' />
                        <div>
                            <button className='SignIn--btn'>Register</button>
                        </div>
                    </nav>
                    <form action="#" className='SignIn--form-area' >
                            <h1>Sign in</h1>
                            <label for="fname">Name</label><br />
                            <input type="text" id="fname" name="fname" placeholder="" /><br/><br />
                            <label for="lname">Safe Key</label><br />
                            <input type="text" id="lname" name="lname" placeholder="" /><br/><br/>
                            <label for="lname">Password</label><br />
                            <input type="text" id="lname" name="lname" placeholder="" /><br/><br/>
                            <input type="submit" value="Sign in" className='submit' />
                            <span><a href='unopass.ng' >Cannot sign in?</a></span>
                            <p>By proceeding, you agree to the <a href='unopass.ng'>Terms of Services</a> and <a href='unopass.ng'>Privacy Notice</a> </p>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default SignIn;