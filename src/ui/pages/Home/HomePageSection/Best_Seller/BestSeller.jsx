import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ShoppingCart, Star } from "lucide-react";
import slide1 from "../../../../../assets/img/slide1.webp";
import slide2 from "../../../../../assets/img/slide2.webp";
import slide3 from "../../../../../assets/img/slide3.webp";
import slide4 from "../../../../../assets/img/slide4.webp";
import slide5 from "../../../../../assets/img/slide5.webp";
import slide6 from "../../../../../assets/img/slide6.webp";
import slide7 from "../../../../../assets/img/slide7.webp";
import slide8 from "../../../../../assets/img/slide8.webp";
import slide9 from "../../../../../assets/img/slide9.webp";
import slide10 from "../../../../../assets/img/slide10.webp";
import slide11 from "../../../../../assets/img/slide11.webp";
import slide12 from "../../../../../assets/img/slide12.webp";

export default function BestSeller() {
  return (
    <>
      <div className="best_seller">
        <h1
          className="heading"
          style={{
            borderTop: "2px solid #E12627",
            borderBottom: "2px solid #E12627",
          }}
        >
          BEST SELLERS
        </h1>

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
        </div>
      </div>
    </>
  );
}
