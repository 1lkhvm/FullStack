import React from 'react'
import './style.scss'
function Section1() {
    return (
        <div className='img-login'>
            <div className='img-login-gray'>
                <div className='login-text'>
                    <h1>Learn From The Expert</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
                    </p>
                    <button className='btn1'>ADMISSION NOW </button>
                </div>
                <div className='login'>
                    <h2 className='title'>Log-in / Sign up Page</h2>
                    <form action="login-box">
                        <label for="username">username or email</label>
                        <input type="text" />
                        <label for="password">password</label>
                        <input type="text" />
                        <label for="password">Repassword</label>
                        <input type="text" />
                        <button className='2'>login</button>
                        <div>
                            <a target="_blank" rel="noopener">forgot password</a>
                            <span>/</span>
                            <a target="_blank" rel="noopener">sign up</a>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Section1 