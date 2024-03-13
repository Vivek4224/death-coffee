import React, { useState } from "react";
import "./signup.css";
import Select from "react-select";

const userType = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
];

export default function Signup() {
    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userType: "",
    });

    //to get form data

    const getData = (e) => {
        e?.preventDefault();
        let jsonData = localStorage?.getItem("dataArray") || "[]";
        let normalData = JSON?.parse(jsonData)
        localStorage?.setItem("dataArray", JSON?.stringify([...normalData, user]));
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userType: "",
        });
        console.log("--->", getData)

    };
    return (
        <div className="signup_container">
            <h1 className="heading_signup">Create Account</h1>
            <form className="inputs" onSubmit={getData}>
                <div className="first">
                    <input
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setUser({ ...user, firstName: e?.target?.value })}
                    />
                </div>

                <div className="sec">
                    <input
                        type="text"
                        placeholder="Last name"
                        onChange={(e) => setUser({ ...user, lastName: e?.target?.value })}
                    />
                </div>

                <div className="third">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                    />
                </div>

                <div className="fourth">
                    <input
                        type="text"
                        placeholder="Password"
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
                        onChange={(e) => setUser({ ...user, userType: e?.value })}
                        options={userType}
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
