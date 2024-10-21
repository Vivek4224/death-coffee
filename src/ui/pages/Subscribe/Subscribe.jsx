import React from "react";
import img from "../../../assets/img/subImg.webp";
import "./subscribe.css";
import society1 from "../../../assets/img/icon-1.avif";
import society2 from "../../../assets/img/icon-4.avif";
import society3 from "../../../assets/img/icon-5.avif";
import society4 from "../../../assets/img/icon-6.avif";
import a8 from "../../../assets/img/slide12.webp";
import a1 from "../../../assets/img/a1.webp";
import a2 from "../../../assets/img/a2.webp";
import a3 from "../../../assets/img/a3.webp";
import a4 from "../../../assets/img/a4.webp";
import a5 from "../../../assets/img/a5.webp";
import a6 from "../../../assets/img/a6.webp";
import a7 from "../../../assets/img/a7.webp";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ShoppingCart, Star } from "lucide-react";

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
            <button style={{ width: "30%" }}>BUILD YOUR SUBSCRIPTION</button>
          </div>
          <div className="second_btn">
            <button style={{ width: "30%" }}>
              LOG IN TO AN EXISTING SUBSCRIPTION
            </button>
          </div>
        </div>

        <div className="society">
          <h1 className="title">SOCIETY EXCLUSIVES</h1>
          <div className="society_exclusive">
            <div className="card_container">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "white" }} />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "white" }} />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "white" }} />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "white" }} />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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
                  border: "2px solid #E12627",
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
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "#E12627" }} color="#E12627" />
                    <Star style={{ fill: "white" }} />
                    <Star style={{ fill: "white" }} />
                  </CardText>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#E12627",
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

        <div className="society_member">
          <h1 className="title">SOCIETY MEMBER-ONLY REWARDS</h1>
          <p className="society_description mb-0 pb-5">
            All can climb the ranks of rewards, but only Society of Strong
            Coffee Members receive these special perks. Subscribe and gain
            access to even <br /> more inner-sanctum sweetness.
          </p>
        </div>
      </div>
    </>
  );
}
