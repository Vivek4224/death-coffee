import React from 'react';
import first from "../../../../../assets/img/first.webp";
import sec from "../../../../../assets/img/second.jpg";
import third from "../../../../../assets/img/third.webp";

export default function ThreeImage() {
    return (
        <>
            <div className="three_img">
                <div className="first_img" style={{ width: "100%" }}>
                    <img src={first} alt="" />
                </div>

                <div className="second_img" style={{ width: "100%" }}>
                    <img src={sec} alt="" />
                </div>

                <div className="third_img" style={{ width: "100%" }}>
                    <img src={third} alt="" />
                </div>
            </div>
        </>
    )
}
