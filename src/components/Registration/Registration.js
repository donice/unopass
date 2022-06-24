import './Registration.css'
import Logo from '../../static/images/unopass-blue-logo.png'
import Favicon from '../../static/images/favicon.png'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{3,23}$/
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

// const REGISTER_URL = './create'; // the route on the backend url

const Registration = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')

  const [error, setError] = useState(false)

  const [errMssg, setErrMssg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  // an effect that tests if the username matches the regex requirements
  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidUser(result)
  }, [user])

  // an effect that tests if the email matches the regex requirements
  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  // an effect that checks if the password matches the regex requirements
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password)
    console.log(result)
    console.log(password)
    setValidPassword(result)
  }, [password])

  // an effect that clears the error message when either of the dependencies changes
  useEffect(() => {
    setErrMssg('')
  }, [user, email, password])

  //.............................

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios(
        'https://unopass-api.herokuapp.com/user/create',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            email,
            password,
            name: user,
          }),
        }
      )
      setUser('')
      setPassword('')
      setEmail('')
      setSuccess(true)
      console.log(response, 'hello world')
    } catch (err) {
      console.log(err, 'Another error')
      setError(true)
      setErrMssg(err.response.data.detail)
    }
  }

  //handlePasswordToggle function

  const passwordToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  const handlePasswordToggle = () => {
    passwordToggle()
  }

  return (
    <>
      {success ? (
        <section className="Registration--success">
          <span>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                color: 'green',
                fontSize: '50px',
              }}
            />
          </span>
          <h1>Your Registration is Successful</h1>
          <p>Proceed to the Sign in Page</p>
          <button>
            <a href="/signin">
              Sign in
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  style={{
                    color: 'white',
                  }}
                />
              </span>
            </a>
          </button>
        </section>
      ) : (
        <section>
          <div className="Registration">
            <div className="Registration-side-bar">
              <img src={Favicon} alt="favicon" />
              <h1>
                Safe. <br />
                Secure. <br />
                Swift. <br />
              </h1>
              <p>
                You'd never have to worry about the security <br />
                of your accounts, ever again. <br />
                Start today, with a click
              </p>
            </div>

            <div className="Registration--form">
              <nav className="Registration--navbar">
                <img
                  src={Favicon}
                  alt="favicon"
                  className="Registration-navbar--favicon"
                />
                <img
                  src={Logo}
                  alt="logo"
                  className="Registration--navbar--logo"
                />
              </nav>
              <form onSubmit={handleSubmit} className="Registration--form-area">
                {/* errr message  */}
                <p
                  ref={errRef}
                  className={errMssg ? 'errmsg' : 'offscreen'}
                  aria-live="assertive"
                >
                  {' '}
                  {errMssg}{' '}
                </p>

                <h1>Create an account</h1>

                <label htmlFor="username">
                  Username:
                  <span className={validUser ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validUser || !user ? 'hide' : 'invalid'}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="username" //matches the label's htmlFor
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validUser ? 'false' : 'true'}
                  aria-describedby="uidnote" // matches the error paragraph id
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validUser
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores hyphens allowed.
                </p>
                <br />
                <br />

                <label htmlFor="email">
                  Email:
                  <span className={validEmail ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validEmail || !email ? 'hide' : 'invalid'}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="email" // matches the label's htmlFor
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="emailconfirm" // matches the error paragraph id
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p
                  id="emailconfirm"
                  className={
                    emailFocus && !validEmail ? 'instructions' : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Enter a valid email address
                </p>
                <br />
                <br />

                <label htmlFor="password">
                  Password:
                  <span className={validPassword ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validPassword || !password ? 'hide' : 'invalid'}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="password" // matches the label's htmlFor
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="false"
                  required
                  aria-invalid={validPassword ? 'false' : 'true'}
                  aria-describedby="pwdnote" // matches the error paragraph id
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  // style={{position: "absolute"}}
                />

                {/* hide/show password toggle  */}
                <span
                  onClick={handlePasswordToggle}
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                  {/* 
									<span style={{fontSize: '13px'}} >
										<FontAwesomeIcon icon={faEyeSlash}/>
									</span> 
								*/}
                </span>
                {/* ----------------------------- */}

                <p
                  id="pwdnote"
                  className={
                    passwordFocus && !validPassword
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character <br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
                <br />
                <br />

                {/* <Link to='/'> */}
                <input
                  type="submit"
                  value="Create Account"
                  className="submit"
                  // style={{position: "relative", top: "10px"}}
                />
                {/* </Link> */}
                <br />
                <span>
                  <a href="/">Already have an account?</a>
                </span>
                <p>
                  By proceeding, you agree to the
                  <a href="/">Terms of Services</a> and
                  <a href="/">Privacy Notice</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Registration
