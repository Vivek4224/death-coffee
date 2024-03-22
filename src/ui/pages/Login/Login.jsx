import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/fetures/auth/authSlice";
import axios from "axios";

const initialUser = {
    email: "",
    password: "",
};

export default function Login() {
    const navigate = useNavigate();
    let [user, setUser] = useState(initialUser);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:9999/user/signin",
            data: user,
        })
            .then((res) => {
                dispatch(login(res.data));
                toast.success("User Login Success...✅");

                if (res?.data?.data?.userType === "admin") {
                    navigate("/dashboard");
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong...❌");
            });

    };
    return (
        <div>
            <div className="login_container">
                <div className="form">
                    <h1 className="login_heading" style={{ backgroundColor: "black" }}>
                        Login
                    </h1>
                    <div className="f_field">
                        <input
                            id="email"
                            type="email"
                            value={user.email}
                            placeholder="Please Enter Email"
                            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        />
                    </div>
                    <div className="s_field">
                        <input
                            id="password"
                            type="text"
                            placeholder="Please enter password"
                            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                        />
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
                        <button onClick={(e) => submitHandler(e)}>Sign in</button>
                    </div>
                    <div style={{ marginTop: "0.5rem", paddingBottom: "2rem" }}>
                        <NavLink
                            to={"/signup"}
                            style={{
                                color: "white",
                                fontFamily: "Fenomen",
                            }}
                        >
                            Create account
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
