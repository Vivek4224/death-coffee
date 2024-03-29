import React from "react";
import "./Home.css";
import Slider from "../slider/Slider";
import BestSeller from "./HomePageSection/Best_Seller/BestSeller";
import Subscribe from "./HomePageSection/subscribe/Subscribe";
import Arrivals from "./HomePageSection/arrivals/Arrivals";
import ThreeImage from "./HomePageSection/threeImg/ThreeImage";
import TextSlider from "./HomePageSection/textSlider/TextSlider";

export default function Home() {
    return (
        <>
            <section className="home_container">
                <div style={{ paddingTop: "6.1rem" }}>
                    <Slider />
                </div>

                <div>
                    <BestSeller />
                </div>

                <div>
                    <Subscribe />
                </div>

                <div>
                    <Arrivals />
                </div>

                <div>
                    <ThreeImage />
                </div>

                <div>
                    <TextSlider />
                </div>

                <div className="following">
                    <h1
                        className="heading"
                        style={{
                            borderTop: "2px solid #E12627",
                            borderBottom: "2px solid #E12627",
                        }}
                    >
                        JOIN THE FOLLOWING <br />
                        <a
                            href="https://www.instagram.com/deathwishcoffee/"
                            style={{ fontSize: "1.5rem", color: "#E12627" }}
                        >
                            @DEATHWISHCOFFEE
                        </a>
                    </h1>
                </div>
            </section>
        </>
    );
}
