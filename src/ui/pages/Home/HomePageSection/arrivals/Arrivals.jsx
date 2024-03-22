import { ShoppingCart, Star } from 'lucide-react';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import a8 from "../../../../../assets/img/slide12.webp";
import a1 from "../../../../../assets/img/a1.webp";
import a2 from "../../../../../assets/img/a2.webp";
import a3 from "../../../../../assets/img/a3.webp";
import a4 from "../../../../../assets/img/a4.webp";
import a5 from "../../../../../assets/img/a5.webp";
import a6 from "../../../../../assets/img/a6.webp";
import a7 from "../../../../../assets/img/a7.webp";

export default function Arrivals() {
    return (
        <>
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
                        <img alt="Sample" src={a8} />
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
        </>
    )
}
