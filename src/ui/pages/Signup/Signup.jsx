import React, { useState } from "react";
import "./signup.css";
import Select from "react-select";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const userType = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
];

const initialUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
};

export default function Signup() {
    let [user, setUser] = useState(initialUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:9999/user/signUp",
        })
            .then((res) => {
                dispatch(login(res.data));
                toast.success("User login success");
                navigate("/");
            })
            .catch((err) => {
                toast.error("Somthing is wrong");
            });
    };

    return (
        <div className="signup_container">
            <h1 className="heading_signup">Create Account</h1>
            <form className="inputs" onSubmit={(e) => submitHandler(e)}>
                <div className="first">
                    <input
                        id="name"
                        type="text"
                        placeholder="First name"
                        required
                        value={user?.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e?.target?.value })}
                    />
                </div>

                <div className="sec">
                    <input
                        // id="name"
                        type="text"
                        placeholder="Last name"
                        required
                        value={user?.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e?.target?.value })}
                    />
                </div>

                <div className="third">
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={user?.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                    />
                </div>

                <div className="fourth">
                    <input
                        id="password"
                        type="text"
                        placeholder="Password"
                        required
                        value={user?.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                    />
                </div>

                <div
                    style={{
                        width: "40%",
                        margin: " 1.2rem auto",
                        color: "black",
                        textAlign: "start",
                    }}
                >
                    <Select
                        onChange={(e) => setUser({ ...user, userType: e?.userType })}
                        options={userType}
                        value={user?.userType}
                        // id=""
                        placeholder="User Type..."
                    />
                </div>

                <button
                    style={{
                        padding: "0.6rem 2.2rem",
                        marginTop: "2rem",
                        border: "none",
                        backgroundColor: "#63181A",
                        color: "white",
                        fontFamily: "Fenomen",
                        letterSpacing: "1px",
                    }}
                >
                    Create
                </button>
            </form>
        </div>
    );
}
