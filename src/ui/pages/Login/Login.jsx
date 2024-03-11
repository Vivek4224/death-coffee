import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <div className="login_container">
                <div className="form">
                    <h1 className="login_heading" style={{ backgroundColor: "black" }}>
                        Login
                    </h1>
                    <div className="f_field">
                        <input type="email" placeholder="Please Enter Email" />
                    </div>
                    <div className="s_field">
                        <input type="text" placeholder="Please enter password" />
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                        <a
                            href="#"
                            style={{
                                marginTop: "0.5rem",
                                color: "white",
                                fontFamily: "Fenomen",
                            }}
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <div className="login_btn">
                        <button>Sign in</button>
                    </div>
                    <div style={{ marginTop: "0.5rem", paddingBottom: "2rem" }}>
                        <NavLink to={"/signup"} style={{
                            color: "white",
                            fontFamily: "Fenomen",
                        }}>Create account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
