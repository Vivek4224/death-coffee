import React from "react";
import "./profile.css";
// import profile from "../../../assets/img/profile.webp";
import profile1 from '../../../assets/img/logo.avif'
import { MessageSquareText } from "lucide-react";

export default function Profile() {
    return (
        <>
            <div className="profile_container">
                <div className="img_section" style={{ width: "25%" }}>
                    <img src={profile1} alt="" />
                </div>

                <div className="profile_details">
                    <div className="name_details">
                        <h2 className="name">
                            <span>Vivek</span> Barvaliya
                        </h2>
                        <h5 className="userType">Web Developer</h5>
                        <p className="massage">
                            <MessageSquareText size={32} strokeWidth={2.5} color="white" />{" "}
                            Send Message
                        </p>
                    </div>
                    <div className="about">
                        <div style={{ paddingBottom: "1rem" }}>
                            {" "}
                            <span>Phone :-</span> +91 99245 ****5
                        </div>
                        <div style={{ paddingBottom: "1rem" }} className="address">
                            <span>Address :-</span> Surat
                        </div>
                        <div style={{ paddingBottom: "1rem" }} className="email">
                            <span>email :- </span> vivek@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
