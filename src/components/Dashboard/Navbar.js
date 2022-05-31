import './Dashboard.css'
// import Logo from '../../static/images/favicon-white.png'
import LogoText from '../../static/images/unopass-logo.png'
import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import Lock from '../../static/icons/lock.svg'
import Note from '../../static/icons/file-text.svg'
import Map from '../../static/icons/map.svg'
import Card from '../../static/icons/credit-card.svg'
import Contact from '../../static/icons/user-plus.svg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
     }

    return (
        <div>
            {/* Horizontal Nav  */}
            <div className='Dashboard--navbar' >
                <img src={LogoText} alt='logo' className='Dashboard--navbar--logo' />
                <input type="text" id="fname" name="fname" placeholder="Search" />
                <nav className='Dashboard--navbar--button'>

            {/* Horizontal Nav  */}

            {/* Add Item Popup  */}
                    <button 
                        className='addItem-btn'
                        onClick={togglePopup}
                        value='add items'
                    > <i class="fas fa-plus" />add items 
                        {isOpen && <Popup
                            className='popup--info'
                            content={<>
                                <nav>
                                    <b>Add Items</b>
                                </nav>
                                <div className='popup-box-additem-div'>
                                    <div>
                                        <img src={Lock}  alt='lock symbol' />
                                        Password
                                    </div>
                                    <div>
                                    <img src={Note}  alt='lock symbol' />
                                        Secure Note
                                    </div>
                                    <div>
                                    <img src={Map}  alt='lock symbol' />
                                        Address
                                    </div>
                                    <div>
                                        <img src={Card}  alt='lock symbol' />
                                        Card
                                    </div>
                                    <div>
                                    <img src={Contact}  alt='lock symbol' />
                                        Contact
                                    </div>
                    
                                </div>
                                
                                <button>add item</button>
                            </>}
                            handleClose={togglePopup}
                        />}
                    </button>
            {/* Add Item Popup  */}

                </nav>
            </div>
    
        </div>
    )
}

export default Navbar;




{/* <i class="fas fa-plus" />add items */}