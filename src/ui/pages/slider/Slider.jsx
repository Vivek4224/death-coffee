import React from "react";
import { Fade } from "react-slideshow-image";
import image1 from "../../../assets/img/banner1.webp";
import image2 from "../../../assets/img/banner2.webp";
import image3 from "../../../assets/img/banner3.webp";

export default function Slider() {
    return (
        <div>
            <Fade>
                <div className="each-slide">
                    <div>
                        <img
                            src={image1}
                            style={{ width: "100%", filter: "brightness(0.5)" }}
                        />
                    </div>
                    <div
                        className="details1"
                        style={{
                            position: "absolute",
                            top: "8rem",
                            left: "5rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3.5rem",
                                fontFamily: "ravana",
                                color: "white",
                                lineHeight: "3.5rem",
                            }}
                        >
                            SOMETHING'S <br /> BREWING WITH <br /> DROPKICK MURPHYS
                        </h1>
                        <p
                            style={{
                                fontFamily: " fenomenLight",
                                color: "white",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                            }}
                        >
                            Reminisce on old times and stay tuned for a new collaboration with{" "}
                            <br /> Dropkick Murphys ahead of their St. Patrick's Day
                            Celebration in Boston.
                        </p>
                        <button
                            className="slider_btn"
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                                marginRight: "1rem",
                            }}
                        >
                            SHOP NOW
                        </button>
                        <button
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                            }}
                        >
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img
                            src={image2}
                            style={{ width: "100%", filter: "brightness(0.5)" }}
                        />
                    </div>
                    <div
                        className="details2"
                        style={{
                            position: "absolute",
                            top: "8rem",
                            left: "5rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3.5rem",
                                fontFamily: "ravana",
                                color: "white",
                                lineHeight: "3.5rem",
                            }}
                        >
                            NO REST FOR THE <br /> WICKED
                        </h1>
                        <p
                            style={{
                                fontFamily: " fenomenLight",
                                color: "white",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                            }}
                        >
                            Handcrafted in a new shape that's never seen the light of day,
                            unearth <br /> the 2024 Death Wish Coffee Mug and leave the past
                            in the dust.
                        </p>
                        <button
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                                marginRight: "1rem",
                            }}
                        >
                            SHOP MUGS
                        </button>
                        <button
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                            }}
                        >
                            SHOP ALL MERCH
                        </button>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img
                            src={image3}
                            style={{ width: "100%", filter: "brightness(0.5)" }}
                        />
                    </div>
                    <div
                        className="details3"
                        style={{
                            position: "absolute",
                            top: "8rem",
                            left: "36rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3.5rem",
                                fontFamily: "ravana",
                                color: "white",
                                lineHeight: "3.5rem",
                            }}
                        >
                            GET YOUR HANDS ON <br /> COCONUT CARAMAUL
                        </h1>
                        <p
                            style={{
                                fontFamily: " fenomenLight",
                                color: "white",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                            }}
                        >
                            Let warm, toasted coconut and decadent caramel fan the flames of  <br /> your inner fire. Available exclusively at deathwishcoffee.com
                        </p>
                        <button
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                                marginRight: "1rem",
                            }}
                        >
                            SHOP COFFEE
                        </button>
                        <button
                            style={{
                                padding: "0.8rem 1rem",
                                backgroundColor: "#63181A",
                                border: "none",
                                color: "white",
                                fontWeight: "900",
                                fontFamily: "fenomen",
                                letterSpacing: ".1rem",
                                cursor: "pointer",
                            }}
                        >
                            SHOP ALL MERCH
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
