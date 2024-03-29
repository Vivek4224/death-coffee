import React from "react";
import "./footer.css";
import logo from "../../../assets/img/logo.avif";
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <div>
            <div className="email_container">
                <h6>LET'S DRINK COFFEE AND THROW THINGS AT HAPPY PEOPLE</h6>
                <input type="text" placeholder="Enter Your Email Address" /><button><NavLink to={"/signup"} style={{ color: "white", textDecoration: "none" }}>SIGN ME UP</NavLink></button>
            </div>
            <div className="footer_container">

                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="details">
                    <div className="company" style={{ marginRight: "2rem" }}>
                        <p>COMPANY</p>
                        <li>
                            <a href="#">Help + FAQ</a>
                        </li>
                        <li>
                            <a href="#">Refund Policy</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Wholesale</a>
                        </li>
                    </div>

                    <div className="accounts" style={{ marginRight: "2rem" }}>
                        <p>ACCOUNTS + ORDERS</p>
                        <li>
                            <a href="#">Your Account</a>
                        </li>
                        <li>
                            <a href="#">Shipping + Delivery</a>
                        </li>
                        <li>
                            <a href="#">Subscription</a>
                        </li>
                        <li>
                            <a href="#">Track Your Order</a>
                        </li>
                    </div>

                    <div className="legal" style={{ marginTop: "1rem" }}>
                        <p>LEGAL</p>
                        <li>
                            <a href="#">Terms + Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">PROP 65</a>
                        </li>
                        <div className="social">
                            <div className="facebook">
                                <a href="https://www.facebook.com/login/" target="_blank">
                                    <svg
                                        width="28"
                                        height="27"
                                        viewBox="0 0 28 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.972656"
                                            width="26.4727"
                                            height="26.5398"
                                            rx="13.2364"
                                            fill="white"
                                        ></rect>
                                        <path
                                            d="M16.9663 10.9318H15.0881V9.55454C15.0881 9.03732 15.3947 8.91673 15.6106 8.91673C15.8261 8.91673 16.9361 8.91673 16.9361 8.91673V6.64291L15.1107 6.63495C13.0842 6.63495 12.6231 8.33083 12.6231 9.4161V10.9318H11.4512V13.2748H12.6231C12.6231 16.2818 12.6231 19.9048 12.6231 19.9048H15.0881C15.0881 19.9048 15.0881 16.2461 15.0881 13.2748H16.7513L16.9663 10.9318Z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="insta">
                                <a
                                    href="https://www.instagram.com/accounts/login/?hl=en"
                                    target="_blank"
                                >
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 27 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.445312"
                                            width="26.4727"
                                            height="26.5398"
                                            rx="13.2364"
                                            fill="white"
                                        ></rect>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16.5119 6.43811C17.666 6.43811 18.6827 6.82378 19.3971 7.56756C20.1116 8.28379 20.4963 9.27551 20.4963 10.4325V16.1073C20.4963 17.2918 20.1116 18.3111 19.3697 19.0273C18.6552 19.716 17.666 20.1017 16.4845 20.1017H10.879C9.75237 20.1017 8.76317 19.7436 8.02126 19.0273C7.25188 18.2835 6.86719 17.2643 6.86719 16.0797V10.4325C6.86719 8.03587 8.46091 6.43811 10.8515 6.43811H16.5119ZM18.4904 18.1183C18.985 17.65 19.2323 16.9613 19.2323 16.1073H19.2872V10.4325C19.2872 9.63362 19.0124 8.94494 18.5453 8.44908C18.0507 7.95322 17.3638 7.7053 16.5394 7.7053H10.879C10.0546 7.7053 9.3402 7.95322 8.87308 8.42153C8.37847 8.91739 8.13117 9.60608 8.13117 10.4325V16.0797C8.13117 16.9337 8.37847 17.6224 8.87308 18.1183C9.36768 18.5866 10.0546 18.8345 10.879 18.8345H16.4845C17.3088 18.8345 17.9958 18.5866 18.4904 18.1183ZM17.3378 10.4321C17.7779 10.4321 18.1347 10.0744 18.1347 9.63322C18.1347 9.19201 17.7779 8.83434 17.3378 8.83434C16.8977 8.83434 16.5409 9.19201 16.5409 9.63322C16.5409 10.0744 16.8977 10.4321 17.3378 10.4321ZM13.6812 9.71662C11.7577 9.71662 10.164 11.2868 10.164 13.2427C10.164 15.1986 11.7303 16.7688 13.6812 16.7688C15.6321 16.7688 17.1984 15.171 17.1984 13.2427C17.1984 11.3144 15.6047 9.71662 13.6812 9.71662ZM13.6812 15.5016C12.4447 15.5016 11.428 14.4823 11.428 13.2427C11.428 12.0031 12.4447 10.9838 13.6812 10.9838C14.9177 10.9838 15.9344 12.0031 15.9344 13.2427C15.9344 14.4823 14.9177 15.5016 13.6812 15.5016Z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="youtube">
                                <a href="https://www.youtube.com/" target="_blank">
                                    <svg
                                        width="28"
                                        height="27"
                                        viewBox="0 0 28 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.917969"
                                            width="26.4727"
                                            height="26.5398"
                                            rx="13.2364"
                                            fill="white"
                                        ></rect>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.2096 9.03839C19.7691 9.18686 20.2051 9.62403 20.3532 10.1767C20.6247 11.183 20.633 13.2699 20.633 13.2699C20.633 13.2699 20.633 15.365 20.3615 16.363C20.2134 16.9157 19.695 17.3694 19.1355 17.5178C18.1235 17.7818 14.1496 17.7653 14.1496 17.7653C14.1496 17.7653 10.1756 17.79 9.16362 17.5178C8.61236 17.3694 8.06934 16.9157 7.92124 16.363C7.64973 15.3567 7.67441 13.2699 7.67441 13.2699C7.67441 13.2699 7.64973 11.183 7.92124 10.1767C8.06934 9.62403 8.60414 9.17036 9.16362 9.02189C10.1756 8.75794 14.1496 8.77443 14.1496 8.77443C14.1496 8.77443 18.1976 8.77443 19.2096 9.03839ZM16.1429 13.2712L12.9094 15.2674V11.2751L16.1429 13.2712Z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="twitter">
                                <a href="https://twitter.com/i/flow/login" target="_blank">
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 27 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            width="26.4727"
                                            height="26.5398"
                                            rx="13.2364"
                                            fill="white"
                                        ></rect>
                                        <path
                                            d="M20.7954 8.94831C20.2762 9.17592 19.7179 9.32951 19.1316 9.39842C19.7299 9.04485 20.1891 8.48465 20.4054 7.81674C19.8456 8.14449 19.2259 8.38245 18.5659 8.51076C18.0376 7.95514 17.2847 7.60791 16.4516 7.60791C14.8518 7.60791 13.5547 8.88795 13.5547 10.4667C13.5547 10.6908 13.5803 10.9088 13.6298 11.1181C11.2222 10.999 9.08752 9.86097 7.65879 8.13122C7.40952 8.5533 7.26664 9.04431 7.26664 9.56844C7.26664 10.5602 7.77803 11.4352 8.5553 11.948C8.08058 11.9329 7.63371 11.8045 7.24326 11.5903C7.243 11.6021 7.243 11.6142 7.243 11.6265C7.243 13.0113 8.24154 14.1668 9.56686 14.4296C9.32375 14.4948 9.0678 14.5299 8.80357 14.5299C8.61673 14.5299 8.43535 14.5121 8.25845 14.4785C8.62725 15.6142 9.69702 16.4408 10.9644 16.4639C9.973 17.2307 8.72406 17.6877 7.3667 17.6877C7.13299 17.6877 6.9025 17.674 6.67578 17.6478C7.95799 18.4591 9.48051 18.9322 11.1164 18.9322C16.4448 18.9322 19.3583 14.576 19.3583 10.7982C19.3583 10.6744 19.3558 10.5508 19.3502 10.4283C19.916 10.0253 20.4074 9.52177 20.7954 8.94831Z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy_container">
                <div className="copy">
                    &#169;2024, Death Wish Coffee Company. All rights reserved.
                </div>
            </div>
        </div>
    );
}
