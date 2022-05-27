import './Hero.css'
import FrontImage from '../../static/images/Secure-data-amico.png'

const Body = () => {
    return (
        <section className='Hero--section'>
            <div className='Hero--info'>
                <h1>
                    Nigeria’s number-1 <br/>
                    password manager
                </h1>
                <p>
                    unopass is the easiest way to store and use <br/>
                    strong passwords. Log in to sites and fill forms <br/>
                    easily with a single click 
                </p>
                <div className='Hero--btn'>
                    <button className='join'>Get Started</button>
                    <button className='signin'>Sign In</button>
                </div>
            </div>
            <img src={FrontImage} alt='front'/>
        </section>
    )
}

export default Body;