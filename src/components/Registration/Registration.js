import './Registration.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: (type === 'checkbox')? checked: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault() // This prevents the form from re-refreshing the form as it is supposed to, by default
        console.log('Congratulations, You just Registratered')
    }


    return (
        <section>
            
            <div className='Registration'>
                <div className='Registration-side-bar'>
                    <img src={Favicon} alt='favicon' />
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
                            <Link to='/signin'>
                                <button 
                                    className='Registration--btn'
                                >Sign in
                                </button>
                            </Link>
                        </div>
                    </nav>
                    <form 
                        onSubmit={handleSubmit} 
                        className='Registration--form-area'
                        >

                        <h1>Create an account</h1>
                        <label htmlFor="firstName">First Name</label>
                        <br />
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            onChange={handleChange}
                            placeholder="First Name"
                            value={formData.firstName} 
                        />
                        <br/>
                        <br />
                        
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            onChange={handleChange}
                            placeholder="Last Name" 
                            value={formData.lastName}
                        />
                        <br/>
                        <br/>

                        <label htmlFor="email">Email</label>
                        <br />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            onChange={handleChange}
                            placeholder="Email" 
                            value={formData.email}/>
                        <br/>
                        <br/>

                        <label htmlFor="password">Password</label>
                        <br />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={handleChange}
                            placeholder="Password" 
                            value={formData.password}/>

                        <br/>
                        <br/>
                        <label htmlFor="passwor">Confirm Password</label>
                        <br />
                        <input 
                            type="password" 
                            id="passwordConfirm" 
                            name="passwordConfirm" 
                            onChange={handleChange}
                            placeholder="Password" 
                            value={formData.passwordConfirm}/>
                        <br/>
                        <br/>
                        <Link to='/signin'>
                            <input 
                                type="submit" 
                                value="Create Account" 
                                className='submit' 
                            />
                        </Link>
                        <span>
                            <a href='/' >
                                Already have an account?
                            </a>
                        </span>
                        <p>
                            By proceeding, you agree to the 
                            <a href='/'>Terms of Services</a> and 
                            <a href='/'>Privacy Notice</a> 
                        </p>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default Registration;