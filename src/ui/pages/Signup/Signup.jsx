import React from 'react';
import './signup.css';

export default function Signup() {
    return (
        <div className='signup_container'>
            <h1 className="heading_signup">
                Create Account
            </h1>
            <div className="inputs">
                <div className="first">
                    <input type="text" placeholder='First name' />
                </div>

                <div className="sec">
                    <input type="text" placeholder='Last name' />
                </div>

                <div className="third">
                    <input type="email" placeholder='Email' />
                </div>

                <div className="fourth">
                    <input type="text" placeholder='Password' />
                </div>

                <div className="first">
                    <input type="text" placeholder='Confirm Password' />
                </div>

                <button style={{ padding: "0.6rem 2.2rem", marginTop: "2rem", border: "none", backgroundColor: "#63181A", color: "white", fontFamily: "Fenomen", letterSpacing: "1px" }}>Create</button>
            </div>
        </div>
    )
}
