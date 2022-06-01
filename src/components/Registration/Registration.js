import './Registration.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
import { useState } from 'react'

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
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
                    <img 
                        src={Favicon} 
                        alt='favicon' 
                        className='Registration-navbar--favicon'
                    />
                        <img 
                            src={Logo} 
                            alt='logo' 
                            className='Registration--navbar--logo'
                        />

                        <div>
                            <button 
                                className='Registration--btn'
                            >Sign in
                            </button>
                        </div>
                    </nav>
                    <form 
                        action="#" 
                        className='Registration--form-area'
                        >

                        <h1>Create an account</h1>
                        <label for="firstName">Name</label>
                        <br />
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            onChange={handleChange}
                            placeholder="First Name" 
                        />
                        <br/>
                        <br />
                        <label for="lastName">Email Address</label>
                        <br />
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            onChange={handleChange}
                            placeholder="Last Name" 
                        />
                        <br/>
                        <br/>
                        <label for="password">Password</label>
                        <br />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                        />
                        <br/>
                        <br/>
                        <label for="passwor">Confirm Password</label>
                        <br />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                        />
                        <br/>
                        <br/>
                        <input 
                            type="submit" 
                            value="Create Account" 
                            className='submit' />
                        <p>
                            By proceeding, you agree to the 
                            <a href='#'>Terms of Services</a> and 
                            <a href='#'>Privacy Notice</a> 
                        </p>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default Registration;