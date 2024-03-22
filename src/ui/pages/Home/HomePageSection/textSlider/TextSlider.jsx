import React from 'react'
import { Slide } from 'react-slideshow-image'

export default function TextSlider() {
    return (
        <>
            <div className="text_slider">
                <Slide
                    autoplay={true}
                    onChange={function noRefCheck() { }}
                    onStartChange={function noRefCheck() { }}
                >
                    <div className="each-slide-effect">
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                                marginTop: "5rem",
                            }}
                        >
                            <span>
                                <h1 style={{ fontFamily: "ravana", color: "white" }}>
                                    “I AM SO HAPPY I STARTED DRINKING <br /> THIS COFFEE”
                                </h1>
                                <h6
                                    style={{
                                        color: "white",
                                        marginTop: "1rem",
                                        fontFamily: "Fenomen",
                                    }}
                                >
                                    I am so happy I started drinking this coffee. This is the
                                    first time I have not had <br /> to deal with acid issues or
                                    coffee making me feel sick after drinking it. I have <br />{" "}
                                    not had that issue once with this coffee and that's a big
                                    deal to me.
                                    <br />- MICHELLE R.
                                </h6>
                            </span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                                marginTop: "5rem",
                            }}
                        >
                            <span>
                                <h1 style={{ fontFamily: "ravana", color: "white" }}>
                                    “THE GREATEST COFFEE ON EARTH”
                                </h1>
                                <h6
                                    style={{
                                        color: "white",
                                        marginTop: "1rem",
                                        fontFamily: "Fenomen",
                                    }}
                                >
                                    Death Wish Coffee is the greatest coffee on earth. I
                                    wholeheartedly believe that. <br /> It's smoother than you
                                    can possibly imagine. It's strong, it's <br /> whole and
                                    it's hearty. I can't endorse this product enough.
                                    <br />- TROY S.
                                </h6>
                            </span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                                marginTop: "5rem",
                            }}
                        >
                            <span>
                                <h1 style={{ fontFamily: "ravana", color: "white" }}>
                                    “CONSIDER IT A FINISHED PROJECT"
                                </h1>
                                <h6
                                    style={{
                                        color: "white",
                                        marginTop: "1rem",
                                        fontFamily: "Fenomen",
                                    }}
                                >
                                    If you need to get things DONE, drink some Death Wish Coffee
                                    and consider it a <br /> finished project. Ordering more as
                                    we speak!
                                    <br />- MASSI B.
                                </h6>
                            </span>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    )
}
