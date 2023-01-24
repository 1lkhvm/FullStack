import React from 'react'
import './style.scss'

function Navbar() {
    return (
        <nav>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                <a ><b>OneSchool</b></a>
                </div>
                <div className='navbar-menu'>
                    <ul>
                        <li> <a >Home</a> </li>
                        <li><a >Add</a></li>   
                    </ul>
                </div>
                <div className='Navbar-button'>
                    <button>Contact Us</button>
                </div>

            </div>

        </nav>
    )
}

export default Navbar