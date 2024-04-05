import React from "react";
import img from "../../../assets/img/subImg.webp";
import "./subscribe.css";
import society1 from "../../../assets/img/icon-1.avif";
import society2 from "../../../assets/img/icon-4.avif";
import society3 from "../../../assets/img/icon-5.avif";
import society4 from "../../../assets/img/icon-6.avif";

export default function Subscribe() {
    return (
        <>
            <div className="save_container">
                <div className="img_container">
                    <img src={img} alt="" />
                </div>
                <div className="text_container">
                    <h3 className="f_text">
                        WELCOME TO <br /> THE SOCIETY OF <br /> STRONG COFFEE
                    </h3>
                    <p className="s_text">
                        Take the quiz below to start your coffee subscription and instantly
                        reap <br /> society-only benefits including 30% off your first
                        shipment, access to <br /> exclusive merch and more.
                    </p>
                    <button
                        style={{
                            width: "25%",
                            height: "2.5rem",
                            border: "none",
                            backgroundColor: "#E12627",
                            color: "white",
                            fontFamily: "fenomen",
                            marginRight: "1rem",
                        }}
                    >
                        TAKE THE QUIZ
                    </button>
                    <button
                        style={{
                            width: "25%",
                            height: "2.5rem",
                            border: "none",
                            backgroundColor: "#E12627",
                            color: "white",
                            fontFamily: "fenomen",
                        }}
                    >
                        SHOP ALL COFFEE
                    </button>
                </div>

                <div className="society_container">
                    <div className="society_heading">
                        <h1>SOCIETY BENEFITS</h1>
                    </div>

                    <div className="society_section">
                        <div className="society_card-1 m-4 w-100">
                            <div className="society_image">
                                <img src={society1} alt="" />
                            </div>
                            <div className="society_headings">
                                BUY MORE, SAVE <br /> MORE
                            </div>
                            <div className="society_paragraph">
                                You’ve entered the elite realm of caffeinators. Save up to 25%
                                off subscription-eligible coffee products. The more you
                                subscribe to, the more you save.
                            </div>
                        </div>

                        <div className="society_card-2 m-4 w-100">
                            <div className="society_image">
                                <img src={society2} alt="" style={{ width: "50%" }} />
                            </div>
                            <div className="society_headings">
                                FREE SHIPPING FOR SOCIETY MEMBERS
                            </div>
                            <div className="society_paragraph">
                                Shipping for all subscription orders to the Continental U.S. is
                                on the house for our ride or dies (that’s you).
                            </div>
                        </div>

                        <div className="society_card-3 m-4 w-100">
                            <div className="society_image">
                                <img src={society3} alt="" />
                            </div>

                            <div className="society_headings">
                                FLEXIBLE <br /> SHIPMENTS
                            </div>
                            <div className="society_paragraph">
                                With the help of NASA Food Labs, Death Wish Coffee developed an
                                instant freeze-dried blend of our coffee to fuel astronauts on
                                the International Space Station.
                            </div>
                        </div>

                        <div className="society_card-4 m-4 w-100">
                            <div className="society_image">
                                <img src={society4} alt="" />
                            </div>
                            <div className="society_headings">EXCLUSIVE ACCESS</div>
                            <div className="society_paragraph">
                                Expanded beyond our original Dark Roast, adding Medium Roast &
                                Espresso Roast to our everyday lineup and introducing flavors of
                                Gingerdead and Blue and Buried.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="firstOrder_container">
                    <h1 className="first_text">
                        SAVE 30% ON YOUR FIRST <br /> ORDER + DON'T MISS OUT
                    </h1>
                    <p className="second_text">
                        Start your subscription today to save 30% on your first shipment and
                        unlock access to other <br /> society-only benefits including
                        exclusive access to new product releases.
                    </p>
                    <div className="first_btn">
                        <button>BUILD YOUR SUBSCRIPTION</button>
                    </div>
                    <div className="second_btn">
                        <button>LOG IN TO AN EXISTING SUBSCRIPTION</button>
                    </div>
                </div>
            </div>
        </>
    );
}
