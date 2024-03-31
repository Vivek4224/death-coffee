import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './signup.css';

const initialUser = {
    name: "",
    email: "",
    number: "",
    password: "",
    conPassword: "",
    gender: "",
    age: "",
};
const initialAddress = {
    add: "",
    city: "",
    state: "",
    pinCode: "",
};

export default function Signup() {

    let [user, setUser] = useState(initialUser);
    let [address, setAddress] = useState(initialAddress);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (user.password !== user.conPassword)
            return toast.error("Password and confirm password does not match");
        axios({
            method: "post",
            url: "http://localhost:9999/user/signUp",
            data: { ...user, address: [address] },
        })
            .then((res) => {
                dispatch(login(res?.data));
                toast.error("Something Went Wrong...❌");
            })
            .catch((err) => {
                toast.success("User Login Success...✅");
                navigate("/");
            });
    };

    return (
        <div className="form_container">
            <h1 className="heading pb-5">Create Account</h1>
            <Form
                onSubmit={(e) => submitHandler(e)}
                className="w-50 p-4 rounded-2 text-align-center m-auto"
                style={{ border: "2px solid #E12627", }}
            >
                <div className="d-flex gap-5">
                    <div style={{ width: "100%" }}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                value={user?.name}
                                onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                                type="text"
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Enter your email"
                                value={user?.email}
                                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                                type="email"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Mobile Number</Label>
                            <Input
                                id="number"
                                placeholder="Enter your mobile number"
                                value={user?.number}
                                onChange={(e) => setUser({ ...user, number: e?.target?.value })}
                                type="number"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input
                                id="age"
                                placeholder="Enter your age"
                                value={user?.age}
                                onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                                type="number"
                                required
                            />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Gender</Label>
                            <div className="d-flex gap-3">
                                <FormGroup>
                                    <Input check={user.gender === "male"} type="radio" name="radio" />
                                    <Label style={{ marginLeft: "5px" }}>Male</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Input check={user.gender === "female"} type="radio" name="radio" />
                                    <Label style={{ marginLeft: "5px" }}>Female</Label>
                                </FormGroup>
                            </div>
                        </FormGroup>

                    </div>
                    <div style={{ width: "100%" }}>

                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                                placeholder="Enter your City"
                                id="city"
                                name="text"
                                onChange={(e) => setAddress({ ...address, city: e?.target?.value })}
                                type="text"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                                placeholder="Enter your state"
                                id="state"
                                name="text"
                                onChange={(e) =>
                                    setAddress({ ...address, state: e?.target?.value })
                                }
                                type="text"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="pinCode">Pincode</Label>
                            <Input
                                placeholder="Enter your pinCode"
                                id="pinCode"
                                name="text"
                                onChange={(e) =>
                                    setAddress({ ...address, pinCode: e?.target?.value })
                                }
                                type="number"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input
                                placeholder="Enter your Password"
                                id="Password"
                                name="text"
                                onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                                type="number"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Confirm password</Label>
                            <Input
                                placeholder="Enter your Password"
                                id="Password"
                                name="text"
                                onChange={(e) =>
                                    setUser({ ...user, conPassword: e?.target?.value })
                                }
                                type="number"
                                required
                            />
                        </FormGroup>
                    </div>
                </div>


                <p style={{ fontFamily: "Fenomen" }}>
                    Already have account
                    <span
                        onClick={() => navigate("/login")}
                        role="button"
                        style={{ color: "#E12627", textDecoration: "underline", letterSpacing: "1px", marginLeft: "0.5rem" }}
                    >
                        Login...!
                    </span>
                </p>
                <button style={{ backgroundColor: "#E12627", border: "none", padding: "0.5rem 1.5rem", color: "white", fontFamily: "Fenomen", borderRadius: "0.5rem" }} className="w-100">
                    Submit
                </button>
            </Form>
        </div>
    );
}

