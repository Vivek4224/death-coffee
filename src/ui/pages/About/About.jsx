import React from "react";
import "./about.css";
import about from "../../../assets/img/about.webp";
import f_icon from "../../../assets/img/icon-1.avif";
import s_icon from "../../../assets/img/icon-2.avif";
import t_icon from "../../../assets/img/icon-3.avif";
import first_img from "../../../assets/img/about-1.webp";
import second_img from "../../../assets/img/about-2.webp";
import year1 from "../../../assets/img/year1.avif";
import year2 from "../../../assets/img/year2.avif";
import year3 from "../../../assets/img/year3.avif";
import year4 from "../../../assets/img/year4.avif";

export default function About() {
    return (
        <>
            <div className="about_container">
                <div className="about_hero">
                    <div className="hero_img">
                        <img src={about} alt="" />
                    </div>
                    <div className="hero_text">
                        REBELLIOUS BY <br /> NATURE
                    </div>
                </div>

                <div className="first_text_sec">
                    <div className="about_heading">LIVE WITH A DEATH WISH</div>
                    <div className="paragraph">
                        To some, a "death wish" may sound irresponsible, morbid, a step too
                        far—but we believe it's <br /> the boldest sign of living life to
                        the fullest. At Death Wish Coffee, we stand for the bold souls{" "}
                        <br /> who never slow down. So get out there and get it done. We'll
                        bring the coffee.
                    </div>
                </div>

                <div className="second_text_sec">
                    <div className="about_heading">REAP WHAT YOU SOW</div>
                    <div className="paragraph">
                        Death Wish Coffee follows strict grading requirements to ensure
                        quality and consistency from <br /> cup to cup. We source USDA
                        Organic and Fair Trade Certified™ arabica and robusta coffee <br />{" "}
                        beans from India, Peru, and other countries throughout South and
                        Central America for our <br /> everyday coffee roasts. This means
                        our coffee is made according to rigorous standards that <br />{" "}
                        protect the environment and the livelihoods of coffee farmers.
                    </div>

                    <div className="icon_sec">
                        <div className="first_icon">
                            <img src={f_icon} alt="" />
                            <div className="text">
                                GUARANTEED MINIMUM <br /> PRICES TO PROTECT <br />
                                FARMERS
                            </div>
                        </div>
                        <div className="second_icon">
                            <img src={s_icon} alt="" />
                            <div className="text">
                                SAFE AND SUSTAINABLE <br /> FARMING METHODS
                            </div>
                        </div>
                        <div className="third_icon">
                            <img src={t_icon} alt="" />
                            <div className="text">
                                COMMUNITY DEVELOPMENT <br /> FUNDS IN COFFEE-GROWING <br />{" "}
                                REGIONS
                            </div>
                        </div>
                    </div>
                </div>

                <div className="robusta_section">
                    <div className="first_section">
                        <div className="text_only">
                            <div className="headings">
                                REDEFINING <br /> ROBUSTA
                            </div>
                            <div className="paragraphs">
                                <p>
                                    Death Wish Coffee has harnessed robusta's magical <br /> powers since
                                    2012, before other coffee companies caught <br /> on to its
                                    resistance to climate change and ability to brew <br /> a bold cup.
                                    We're bold enough to find the best qualities in <br /> robusta and
                                    give these power-packed beans proper care <br /> through processing
                                    at origin and roasting at our <br /> manufacturing sites.
                                </p>

                                <p style={{ marginTop: "3rem" }}>
                                    This rigorous process results in a strong cup of coffee with <br />
                                    increased aroma and mouth feel, low acidity, and an <br /> extra kick
                                    of caffeine. Paired with our Fair Trade and <br /> organic arabica
                                    beans, you're guaranteed a bold, smooth <br /> and premium cup of
                                    coffee every time—because who <br /> wants weak, watery coffee?
                                </p>
                            </div>
                        </div>

                        <div className="image">
                            <img src={first_img} alt="" />
                        </div>
                    </div>

                    <div className="second_section">
                        <div className="image">
                            <img src={second_img} alt="" />
                        </div>
                        <div className="text_only">
                            <div className="headings">
                                CAFFEINDS <br /> BEHIND THE <br /> BEANS
                            </div>
                            <div className="paragraphs mt-4">
                                Founded in 2012 in Saratoga Springs, New York, Death Wish Coffee is made up of a passionate team that's always looking at fresh ways to provide bold, smooth cups of coffee to our people. We're headquartered in downtown Saratoga Springs, with manufacturing down the road in Round Lake, New York and an office in New York City. We live to rebel against blah beans—and a boring, lackluster life.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="year_section">
                    <div className="year_card-1 m-4 w-100">
                        <div className="year_image">
                            <img src={year1} alt="" />
                        </div>
                        <div className="year_heading">
                            2020
                        </div>
                        <div className="year_headings">
                            GOOD MORNING <br /> AMERICA
                        </div>
                        <div className="year_paragraph">
                            “Good Morning America” airs a segment on Death Wish Coffee and introduces us to thousands of people.
                        </div>
                    </div>

                    <div className="year_card-2 m-4 w-100">
                        <div className="year_image">
                            <img src={year2} alt="" />
                        </div>
                        <div className="year_heading">
                            2021
                        </div>
                        <div className="year_headings">
                            SUPER BOWL 50 <br /> AD AIRS
                        </div>
                        <div className="year_paragraph">
                            We became the smallest company to run a commercial during Super Bowl 50 after winning the Intuit Small Business Big Game Competition.
                        </div>
                    </div>

                    <div className="year_card-3 m-4 w-100">
                        <div className="year_image">
                            <img src={year3} alt="" />
                        </div>
                        <div className="year_heading">
                            2022
                        </div>
                        <div className="year_headings">
                            CAFFEINATED THE <br /> UNIVERSE
                        </div>
                        <div className="year_paragraph">
                            With the help of NASA Food Labs, Death Wish Coffee developed an instant freeze-dried blend of our coffee to fuel astronauts on the International Space Station.
                        </div>
                    </div>

                    <div className="year_card-4 m-4 w-100">
                        <div className="year_image">
                            <img src={year4} alt="" />
                        </div>
                        <div className="year_heading">
                            2023-24
                        </div>
                        <div className="year_headings">
                            NEW ROASTS AND <br /> FLAVORS
                        </div>
                        <div className="year_paragraph">
                            Expanded beyond our original Dark Roast, adding Medium Roast & Espresso Roast to our everyday lineup and introducing flavors of Gingerdead and Blue and Buried.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
