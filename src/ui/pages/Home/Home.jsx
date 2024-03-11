import React from "react";
import "./Home.css";
import Slider from "../slider/Slider";
import slide1 from "../../../assets/img/slide1.webp";
import slide2 from "../../../assets/img/slide2.webp";
import slide3 from "../../../assets/img/slide3.webp";
import slide4 from "../../../assets/img/slide4.webp";
import slide5 from "../../../assets/img/slide5.webp";
import slide6 from "../../../assets/img/slide6.webp";
import slide7 from "../../../assets/img/slide7.webp";
import slide8 from "../../../assets/img/slide8.webp";
import slide9 from "../../../assets/img/slide9.webp";
import slide10 from "../../../assets/img/slide10.webp";
import slide11 from "../../../assets/img/slide11.webp";
import slide12 from "../../../assets/img/slide12.webp";
import a1 from "../../../assets/img/a1.webp";
import a2 from "../../../assets/img/a2.webp";
import a3 from "../../../assets/img/a3.webp";
import a4 from "../../../assets/img/a4.webp";
import a5 from "../../../assets/img/a5.webp";
import a6 from "../../../assets/img/a6.webp";
import a7 from "../../../assets/img/a7.webp";
import first from "../../../assets/img/first.webp";
import sec from "../../../assets/img/second.jpg";
import third from "../../../assets/img/third.webp";
import video from "../../../assets/img/add.mp4";
import { ShoppingCart, Star } from "lucide-react";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
} from "reactstrap";
import { Slide } from "react-slideshow-image";

export default function Home() {
    return (
        <>
            <section className="home_container">
                <div style={{ paddingTop: "6.1rem" }}>
                    <Slider />
                </div>

                <div className="best_seller">
                    <h1
                        className="heading"
                        style={{
                            borderTop: "2px solid #63181A",
                            borderBottom: "2px solid #63181A",
                        }}
                    >
                        BEST SELLERS
                    </h1>

                    <div className="card_container">
                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide1} />
                            <CardBody>
                                <CardTitle tag="h6">DARK ROAST SINGLE-SERVE PODS</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $14.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide2} />
                            <CardBody>
                                <CardTitle tag="h6">COCONUT CARAMAUL COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide3} />
                            <CardBody>
                                <CardTitle tag="h6">DARK ROAST COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide4} />
                            <CardBody>
                                <CardTitle tag="h6">CHOCOLATE HAZELNUT COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide5} />
                            <CardBody>
                                <CardTitle tag="h6">CHOCOLATE SINGLE-SERVE PODS</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $15.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide6} />
                            <CardBody>
                                <CardTitle tag="h6">SOCIETY OF STRONG MUG</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $38.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide7} />
                            <CardBody>
                                <CardTitle tag="h6">SACRED TRUTH WORK JACKET</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $125.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide8} />
                            <CardBody>
                                <CardTitle tag="h6">MEDIUM ROAST COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide9} />
                            <CardBody>
                                <CardTitle tag="h6">MEDIUM ROAST SINGLE-SERVE PODS</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide10} />
                            <CardBody>
                                <CardTitle tag="h6">CROSSBONES KLEAN KANTEEN MUG</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $25.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide11} />
                            <CardBody>
                                <CardTitle tag="h6">ANTHONY ALFREDO NO.62 SNAPBACK</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $35.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide12} />
                            <CardBody>
                                <CardTitle tag="h6">RISE & GRINDER DEATH WISH COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $25.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>

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
                                backgroundColor: "#63181A",
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

                <div className="arrivals">
                    <h1
                        className="heading"
                        style={{
                            borderTop: "2px solid #63181A",
                            borderBottom: "2px solid #63181A",
                        }}
                    >
                        NEW ARRIVALS
                    </h1>

                    <div className="card_container">
                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={slide12} />
                            <CardBody>
                                <CardTitle tag="h6">RISE & GRINDER</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $25.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a1} />
                            <CardBody>
                                <CardTitle tag="h6">ANTHONY NO. 62 SNAPBACK</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $35.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a2} />
                            <CardBody>
                                <CardTitle tag="h6">SOCIETY OF STRONG MUG</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $38.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a3} />
                            <CardBody>
                                <CardTitle tag="h6">SOCIETY INSIGNIA HAT</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $25.00
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a4} />
                            <CardBody>
                                <CardTitle tag="h6">SHADOW LOGO TEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $25.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a5} />
                            <CardBody>
                                <CardTitle tag="h6">DARK ROAST COFFEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $19.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a6} />
                            <CardBody>
                                <CardTitle tag="h6">CORE CLASSIC LOGO TEE</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $26.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: "18rem",
                                backgroundColor: "black",
                                border: "2px solid #A1323A",
                                color: "white",
                                fontFamily: "Fenomen",
                                margin: "0.5rem",
                            }}
                        >
                            <img alt="Sample" src={a7} />
                            <CardBody>
                                <CardTitle tag="h6">CORE CLASSIC LOGO TEE RED</CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    style={{ color: "white" }}
                                    tag="h6"
                                >
                                    $26.99
                                </CardSubtitle>
                                <CardText>
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "#63181A" }} color="#63181A" />
                                    <Star style={{ fill: "white" }} />
                                    <Star style={{ fill: "white" }} />
                                </CardText>
                                <Button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#63181A",
                                        border: "none",
                                    }}
                                >
                                    Quick Shop <ShoppingCart />
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>

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

                <div className="following">
                    <h1
                        className="heading"
                        style={{
                            borderTop: "2px solid #63181A",
                            borderBottom: "2px solid #63181A",
                        }}
                    >
                        JOIN THE FOLLOWING <br />
                        <a
                            href="https://www.instagram.com/deathwishcoffee/"
                            style={{ fontSize: "1.5rem", color: "#951C23" }}
                        >
                            @DEATHWISHCOFFEE
                        </a>
                    </h1>
                </div>
            </section>
        </>
    );
}
