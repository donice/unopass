import './Sign-in.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SignIn = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        safeKey: "",
        password: "",
    })

    console.log(formData)

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


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
                        <img 
                            src={Favicon} 
                            alt='favicon' 
                            className='SignIn-navbar--favicon' 
                        />
                        <img 
                            src={Logo} 
                            alt='logo' 
                            className='SignIn--navbar--logo'
                        />
                        <div>
                            <Link to='/register'>
                                <button 
                                    className='SignIn--btn'>
                                        Register
                                </button>
                            </Link>
                        </div>
                    </nav>
                    <form 
                        action="#" 
                        className='SignIn--form-area' 
                        >
                            <h1>Sign in</h1>
                            <label for="fullName">Full Name</label><br />
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName" 
                                onChange={handleChange}
                                placeholder="Full Name" 
                            />
                            <br/>
                            <br />
                            <label for="safeKey">Safe Key</label><br />
                            <input 
                                type="text" 
                                id="safeKey" 
                                name="safeKey" 
                                onChange={handleChange}
                                placeholder="Safe Key" 
                            />
                            <br/>
                            <br/>
                            <label for="password">Password</label><br />
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                onChange={handleChange}
                                placeholder="Password" 
                            />
                            <br/>
                            <br/>
                            <Link to='/dashboard' >
                                <input 
                                    type="submit" 
                                    value="Sign in" 
                                    className='submit' 
                                />
                            </Link>
                            <span>
                                <a href='unopass.vercel.app' >
                                    Cannot sign in?
                                </a>
                            </span>
                            <p>By proceeding, you agree to the 
                                <a href='unopass.ng'>Terms of Services
                                </a> and <a href='unopass.ng'>Privacy Notice
                                </a>
                            </p>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default SignIn;