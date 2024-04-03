import React from "react";
import "./header.css";
import { NavLink, Navigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.avif";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";

export default function Header() {
    const data = useSelector((state) => state.authSlice);

    return (
        <>
            <header>
                {data?.user?.userType !== "admin" ? (
                    <>
                        <div className="left_nav">
                            <li className="left_li">
                                <a href="#">COFFEE</a>
                            </li>
                            <li className="left_li">
                                <a href="#">SUBSCRIBE & SAVE</a>
                            </li>
                            <li className="left_li">
                                <a href="#">MERCH</a>
                            </li>
                        </div>
                        <div className="center_nav">
                            <NavLink to={"/"}>
                                <img src={Logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="right_nav">
                            <li className="right_li">
                                <a href="#">FIND IN STORE</a>
                            </li>
                            <li className="right_li">
                                <a href="#">THE VOID</a>
                            </li>
                            <li className="right_li">
                                <NavLink to={"/about"}>ABOUT</NavLink>
                            </li>

                            <div className="last_icons">
                                {data?.token ? (
                                    <div className="login">
                                        <NavLink to={"/profile"}>
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="23"
                                                viewBox="0 0 17 23"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.82031 10.4301C11.5817 10.4301 13.8203 8.19148 13.8203 5.43005C13.8203 2.66863 11.5817 0.430054 8.82031 0.430054C6.05889 0.430054 3.82031 2.66863 3.82031 5.43005C3.82031 8.19148 6.05889 10.4301 8.82031 10.4301ZM8.82031 11.4301C4.40203 11.4301 0.820312 15.0118 0.820312 19.4301V22.4301H16.8203V19.4301C16.8203 15.0118 13.2386 11.4301 8.82031 11.4301Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div className="login">
                                        <NavLink to={"/login"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="23"
                                                viewBox="0 0 17 23"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.82031 10.4301C11.5817 10.4301 13.8203 8.19148 13.8203 5.43005C13.8203 2.66863 11.5817 0.430054 8.82031 0.430054C6.05889 0.430054 3.82031 2.66863 3.82031 5.43005C3.82031 8.19148 6.05889 10.4301 8.82031 10.4301ZM8.82031 11.4301C4.40203 11.4301 0.820312 15.0118 0.820312 19.4301V22.4301H16.8203V19.4301C16.8203 15.0118 13.2386 11.4301 8.82031 11.4301Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                )}

                                <div className="search" style={{ paddingLeft: "1rem" }}>
                                    <NavLink to="/searchbar">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.5977 6.81875C13.5977 10.3471 10.7374 13.2074 7.20899 13.2074C3.68062 13.2074 0.820312 10.3471 0.820312 6.81875C0.820312 3.29037 3.68062 0.430054 7.20899 0.430054C10.7374 0.430054 13.5977 3.29037 13.5977 6.81875ZM13.9333 12.037L18.5032 16.6068C18.6032 16.7054 18.6827 16.8229 18.7371 16.9524C18.7916 17.0819 18.8198 17.2209 18.8203 17.3613C18.8208 17.5018 18.7935 17.641 18.7399 17.7709C18.6864 17.9007 18.6076 18.0187 18.5083 18.118C18.4089 18.2173 18.2909 18.296 18.161 18.3495C18.0311 18.403 17.8919 18.4302 17.7514 18.4297C17.611 18.4292 17.472 18.4008 17.3425 18.3464C17.213 18.2919 17.0956 18.2123 16.997 18.1122L12.4272 13.5424C12.71 13.3258 12.9788 13.0916 13.2321 12.8411C13.4822 12.5878 13.7164 12.3192 13.9333 12.037Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </NavLink>
                                </div>

                                <div
                                    className="cart"
                                    style={{ paddingLeft: "1rem", marginRight: "-0.5rem" }}
                                >
                                    <a href="#">
                                        {" "}
                                        <div className="login">
                                            <a href="#">
                                                {" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="21"
                                                    viewBox="0 0 26 21"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_4479_1794)">
                                                        <path
                                                            d="M0.818359 0.969604H5.34983L9.23308 14.0691H23.179"
                                                            stroke="white"
                                                            stroke-width="1.545"
                                                        ></path>
                                                        <path
                                                            d="M8.96289 1.96313L25.1245 3.29664L24.104 10.8923H11.8737L8.96289 1.96313Z"
                                                            fill="white"
                                                            stroke="white"
                                                            stroke-width="1.545"
                                                        ></path>
                                                        <path
                                                            d="M11.837 20.6596C13.117 20.6596 14.1545 19.6279 14.1545 18.3551C14.1545 17.0824 13.117 16.0507 11.837 16.0507C10.5571 16.0507 9.51953 17.0824 9.51953 18.3551C9.51953 19.6279 10.5571 20.6596 11.837 20.6596Z"
                                                            fill="white"
                                                        ></path>
                                                        <path
                                                            d="M19.5636 20.6596C20.8435 20.6596 21.8811 19.6279 21.8811 18.3551C21.8811 17.0824 20.8435 16.0507 19.5636 16.0507C18.2837 16.0507 17.2461 17.0824 17.2461 18.3551C17.2461 19.6279 18.2837 20.6596 19.5636 20.6596Z"
                                                            fill="white"
                                                        ></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4479_1794">
                                                            <rect
                                                                width="25.1797"
                                                                height="20.4585"
                                                                fill="white"
                                                                transform="translate(0.820312 0.200806)"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="left_nav">
                            <li className="left_li">
                                <NavLink to="/dashboard">DASHBOARD</NavLink>
                            </li>
                            <li className="left_li">
                                <NavLink to="/product">PRODUCTS</NavLink>
                            </li>
                            <li className="left_li">
                                <a href="#">ORDERS</a>
                            </li>
                        </div>
                        <div className="center_nav">
                            <NavLink to={"/"}>
                                <img src={Logo} alt="" style={{ paddingRight: "2rem" }} />
                            </NavLink>
                        </div>
                        <div className="right_nav">
                            <li className="right_li">
                                <a href="#">FIND IN STORE</a>
                            </li>
                            <li className="right_li">
                                <a href="#">THE VOID</a>
                            </li>
                            <li className="right_li">
                                <NavLink to={"/about"}>ABOUT</NavLink>
                            </li>

                            <div className="last_icons">
                                {data?.token ? (
                                    <div className="login">
                                        <NavLink to={"/profile"}>
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="23"
                                                viewBox="0 0 17 23"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.82031 10.4301C11.5817 10.4301 13.8203 8.19148 13.8203 5.43005C13.8203 2.66863 11.5817 0.430054 8.82031 0.430054C6.05889 0.430054 3.82031 2.66863 3.82031 5.43005C3.82031 8.19148 6.05889 10.4301 8.82031 10.4301ZM8.82031 11.4301C4.40203 11.4301 0.820312 15.0118 0.820312 19.4301V22.4301H16.8203V19.4301C16.8203 15.0118 13.2386 11.4301 8.82031 11.4301Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div className="login">
                                        <NavLink to={"/login"}>
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="23"
                                                viewBox="0 0 17 23"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.82031 10.4301C11.5817 10.4301 13.8203 8.19148 13.8203 5.43005C13.8203 2.66863 11.5817 0.430054 8.82031 0.430054C6.05889 0.430054 3.82031 2.66863 3.82031 5.43005C3.82031 8.19148 6.05889 10.4301 8.82031 10.4301ZM8.82031 11.4301C4.40203 11.4301 0.820312 15.0118 0.820312 19.4301V22.4301H16.8203V19.4301C16.8203 15.0118 13.2386 11.4301 8.82031 11.4301Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </NavLink>
                                    </div>
                                )}

                                <div className="search" style={{ paddingLeft: "1rem" }}>
                                    <NavLink to="/searchbar">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.5977 6.81875C13.5977 10.3471 10.7374 13.2074 7.20899 13.2074C3.68062 13.2074 0.820312 10.3471 0.820312 6.81875C0.820312 3.29037 3.68062 0.430054 7.20899 0.430054C10.7374 0.430054 13.5977 3.29037 13.5977 6.81875ZM13.9333 12.037L18.5032 16.6068C18.6032 16.7054 18.6827 16.8229 18.7371 16.9524C18.7916 17.0819 18.8198 17.2209 18.8203 17.3613C18.8208 17.5018 18.7935 17.641 18.7399 17.7709C18.6864 17.9007 18.6076 18.0187 18.5083 18.118C18.4089 18.2173 18.2909 18.296 18.161 18.3495C18.0311 18.403 17.8919 18.4302 17.7514 18.4297C17.611 18.4292 17.472 18.4008 17.3425 18.3464C17.213 18.2919 17.0956 18.2123 16.997 18.1122L12.4272 13.5424C12.71 13.3258 12.9788 13.0916 13.2321 12.8411C13.4822 12.5878 13.7164 12.3192 13.9333 12.037Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </NavLink>
                                </div>

                                <div
                                    className="cart"
                                    style={{ paddingLeft: "1rem", marginRight: "-0.5rem" }}
                                >
                                    <a href="#">
                                        {" "}
                                        <div className="login">
                                            <a href="#">
                                                {" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="21"
                                                    viewBox="0 0 26 21"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_4479_1794)">
                                                        <path
                                                            d="M0.818359 0.969604H5.34983L9.23308 14.0691H23.179"
                                                            stroke="white"
                                                            stroke-width="1.545"
                                                        ></path>
                                                        <path
                                                            d="M8.96289 1.96313L25.1245 3.29664L24.104 10.8923H11.8737L8.96289 1.96313Z"
                                                            fill="white"
                                                            stroke="white"
                                                            stroke-width="1.545"
                                                        ></path>
                                                        <path
                                                            d="M11.837 20.6596C13.117 20.6596 14.1545 19.6279 14.1545 18.3551C14.1545 17.0824 13.117 16.0507 11.837 16.0507C10.5571 16.0507 9.51953 17.0824 9.51953 18.3551C9.51953 19.6279 10.5571 20.6596 11.837 20.6596Z"
                                                            fill="white"
                                                        ></path>
                                                        <path
                                                            d="M19.5636 20.6596C20.8435 20.6596 21.8811 19.6279 21.8811 18.3551C21.8811 17.0824 20.8435 16.0507 19.5636 16.0507C18.2837 16.0507 17.2461 17.0824 17.2461 18.3551C17.2461 19.6279 18.2837 20.6596 19.5636 20.6596Z"
                                                            fill="white"
                                                        ></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4479_1794">
                                                            <rect
                                                                width="25.1797"
                                                                height="20.4585"
                                                                fill="white"
                                                                transform="translate(0.820312 0.200806)"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}
