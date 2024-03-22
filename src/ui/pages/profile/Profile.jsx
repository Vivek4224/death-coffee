import React from "react";
import "./profile.css";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
    let { user } = useSelector((state) => state.authSlice);

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logOut());
        navigate("/");
        toast.success("You Are Logout...✅")
    }

    const navigate = useNavigate()
    return (
        <div className="form_container">
            <h1 className="heading pb-5">USER PROFILE</h1>
            <div className="profile_details">
                <div className="name">
                    <h5>
                        <span>NAME :-</span> {user.name || "ADMIN"}
                    </h5>
                </div>
                <div className="email">
                    <h5>
                        <span>EMAIL :-</span> {user.email}
                    </h5>
                </div>
                <div className="mobile">
                    <h5>
                        <span>MOBILE NO. :-</span> {user.number || "NUMBER"}
                    </h5>
                </div>
                <div className="age">
                    <h5>
                        <span>AGE :-</span> {user.age || "AGE"}
                    </h5>
                </div>
                <div className="usertype">
                    <h5>
                        <span>USERTYPE :-</span> {user.userType}
                    </h5>
                </div>
                <div className="button">
                    <button onClick={() => logoutHandler()}>
                        LOGOUT <LogOut />
                    </button>
                </div>
            </div>
        </div>
    );
}
