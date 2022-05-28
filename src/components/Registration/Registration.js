import './Registration.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
// import Navbar from '../Navbar/Navbar'

const Registration = () => {
    return (
        <section>
            
            <div className='Registration'>
                <div className='Registration-side-bar'>
                    <img src={Favicon} />
                    <h1>Safe. <br />
                        Secure. <br />
                        Swift. <br />
                    </h1>
                    <p>You'd never have to worry about the security <br />
                     of your accounts, ever again. <br />
                     Start today, with a click
                    </p>
                </div>
                <div className='Registration--form'>
                    <nav className='Registration--navbar' >
                    <img src={Favicon} alt='favicon' className='Registration-navbar--favicon' />
                        <img src={Logo} alt='logo' className='Registration--navbar--logo' />
                        <div>
                            <button className='Registration--btn'>Sign in</button>
                        </div>
                    </nav>
                    <form action="#" className='Registration--form-area' >
                            <h1>Create an account</h1>
                            <label for="fname">Name</label><br />
                            <input type="text" id="fname" name="fname" placeholder="" /><br/><br />
                            <label for="lname">Email Address</label><br />
                            <input type="text" id="lname" name="lname" placeholder="" /><br/><br/>
                            <label for="lname">Password</label><br />
                            <input type="text" id="lname" name="lname" placeholder="" /><br/><br/>
                            <label for="lname">Confirm Password</label><br />
                            <input type="text" id="lname" name="lname" placeholder="" /><br/><br/>
                            <input type="submit" value="Create Account" className='submit' />
                            <p>By proceeding, you agree to the <a href='#'>Terms of Services</a> and <a href='#'>Privacy Notice</a> </p>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default Registration;