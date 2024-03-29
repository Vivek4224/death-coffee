import React from 'react';
import video from "../../../../../assets/img/add.mp4";
import { Button } from 'reactstrap';

export default function Subscribe() {
    return (
        <>
            <div className="subscribe">
                <div className="video">
                    <video src={video} autoPlay muted loop />
                </div>
                <div className="description">
                    <p className="f_line">THE SOCIETY OF STRONG COFFEE</p>
                    <h2 className="s_line">
                        SAVE <span>30%</span> OFF YOUR <br /> FIRST SHIPMENT
                    </h2>
                    <p className="t_line">
                        Like a secret handshake, your status in the Society of Strong
                        Coffee also <br /> earns you exclusive access to subscriber-only
                        merch, events, forums, and <br /> so much more. Start a
                        subscription today to start reaping the benefits.
                    </p>
                    <Button
                        style={{
                            backgroundColor: "#E12627",
                            border: "none",
                            fontFamily: "fenomen",
                            padding: "1rem 1rem",
                            letterSpacing: "1px",
                        }}
                        className="btn"
                    >
                        START A COFFEE SUBSCRIPTION
                    </Button>
                </div>
            </div>
        </>
    )
}
