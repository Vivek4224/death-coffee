import React from 'react';
import './error.css';
import error404 from "../../../assets/img/404-clean.svg"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input } from 'reactstrap';
import slide1 from "../../../assets/img/slide1.webp";
import slide2 from "../../../assets/img/slide2.webp";
import slide3 from "../../../assets/img/slide3.webp";
import slide4 from "../../../assets/img/slide4.webp";
import { ShoppingCart, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Error404() {
    return (
        <div>
            <div className="error_container">
                <div className="error_img">
                    <img src={error404} alt="" />
                </div>
                <h3 className="empty">
                    EMPTY MUG?
                </h3>
                <p style={{ textAlign: "center", color: "white", marginBottom: "2.5rem", fontFamily: "fenomenLight" }}>This page is empty, too. Refill your cup by shopping the links below.</p>
                <p style={{ textAlign: "center", color: "white", fontFamily: "fenomenLight" }}>Looking for something else?</p>
                <Input placeholder='Search' style={{ width: "30%", margin: "auto" }} />
                <div style={{ textAlign: "center", marginTop: "1rem" }}>

                    <button style={{ padding: "0.5rem 2rem", border: "none", backgroundColor: "#63181A", fontFamily: "Fenomen" }}><NavLink to='/' style={{ color: "white", textDecoration: "none", letterSpacing: "1px" }}>Home</NavLink></button>
                </div>
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

                <div className="card_container" style={{ paddingBottom: "3.5rem" }}>
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
                </div>
            </div>
        </div>
    )
}
