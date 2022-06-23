import './Hero.css'
import FrontImage from '../../static/images/Secure-data-amico.png'
import { Link } from 'react-router-dom'

const Body = () => {
    return (
        <section className='Hero--section'>
            <div className='Hero--info'>
                <h1>
                    Nigeria’s number-1
                    password manager
                </h1>
                <p>
                    unopass is the easiest way to store and use 
                    strong passwords. Log in to sites and fill forms 
                    easily with a single click 
                </p>
                <div className='Hero--btn'>
                    <Link to='/register'>
                        <button className='join'>
                            Get Started
                        </button>
                    </Link>
                    <Link to='/signin'> 
                        <button className='signin'>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
            <img 
                src={FrontImage} 
                alt='front'
            />
        </section>
    )
}

export default Body;