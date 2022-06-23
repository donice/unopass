import './Sign-in.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../../context/AuthProvider'
import axios from 'axios'


const SignIn = () => {

	const { setAuth } = useContext(Authcontext)
	const userRef = useRef()
	const errRef = useRef()
 
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [errMssg, setErrMssg] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		userRef.current.focus();
	}, []);
  
	useEffect(() => {
		setErrMssg('');
	}, [user, password])


	// handleSUbmit Function
	const handleSubmit = async (e) => {
      e.preventDefault();
		
		try {
			const response = await axios('https://unopass-api.herokuapp.com/user/create', {
         	method: 'POST',
         	headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         	data: JSON.stringify({
           	password,
           	name: user,
         })
      })
			setUser('');
			setPassword('');
			setSuccess(true)
			console.log(response, 'hello world')
		} catch(err) {
			console.log(err, 'Another error')
			setErrMssg(err.response.data.detail)
		}
   }


    return (
		<>
		{success ?
      (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href="/" >Go to Home</a>
          </p>
        </section>
      )
      :
      (<section>
            
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
                        onSubmit={handleSubmit}
                        className='SignIn--form-area' 
                     >
								<p ref={errRef} className={errMssg ? "errmsg" : "offscreen"} aria-live="assertive">{errMssg}</p>
                        <h1>Sign in</h1>
								<label htmlFor="username">Username:</label>
								<br />
              					<input
              					  	type="text"
              					  	id="username"
              					  	ref={userRef}
              					  	autoComplete="off"
              					  	onChange={(e) => setUser(e.target.value)}
              					  	value={user}
              					  	required
              					/>
									<br />
									<br />
            				<label htmlFor="password">Password:</label>
								<br />
								
              					<input
              					  	type="password"
              					  	id="password"
              					  	onChange={(e) => setPassword(e.target.value)}
              					  	value={password} 
              					  	required
              					/>
									<br />
                        <Link to='/dashboard' >
                           <input 
                              type="submit" 
                              value="Sign in" 
                              className='submit' 
                           />
                        </Link>
                        <span>
                           <a href='/' >
                              Cannot sign in?
                           </a>
                        </span>
                           <p>By proceeding, you agree to the 
                              <a href='/'>Terms of Services
                              </a> and <a href='/'>Privacy Notice
                              </a>
                           </p>
                    	</form> 
                	</div>
            </div>
        </section>
		  )}
		</>

        
    )
}

export default SignIn;