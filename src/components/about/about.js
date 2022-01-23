import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/chimpy.png";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div
        className="about-control"
        style={{ border: "solid black 20px" }}
      >
        <img href="https://seanpen00.github.io/CheekyChimps/static/media/CenterPic.7f3fb613.png" />
        <Container style={{ border: "solid #7E7E7F 0xp", textAlign: "left" }}>
          <Row>
            <Col md={6} xs={12} className="about-description">
              <header className="about-title hidden" style={{ fontSize: 80 }}>
                CHEEKY
              </header>
              <header
                className="about-title hidden"
                style={{ fontSize: 80, paddingTop: 0 }}
              >
                CHIMPS
              </header>
              <header className="about-title bidden">UTILITY</header>
              <p style={{ paddingTop: "2em" }}>
                <text
                  className="about-text"
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontFamily: "newThing",
                  }}
                >
                  A collection of 11,111 hand crafted 3D NFT’s built on the
                  Ethereum blockchain, providing holders maximum benefit and
                  utility.
                  <br />
                  <br />
                  Owning a Cheeky Chimps NFT means you become{" "}
                  <text style={{ fontSize: 23, textDecoration: "underline" }}>
                    The House!
                  </text>{" "}
                  Earn monthly revenue share from our web-based casino and
                  experience exclusive member-only games and events.
                  <br />
                  <br />
                  NFT holders also gain access to “The Club”, a purpose-built
                  and exclusive establishment in the Somnium Space metaverse.
                  Come have a bet, play arcades or join our weekly VR meetups,
                  hosted only by the elite.
                  <br />
                  <br />
                  <text
                    style={{ textDecoration: "", fontSize: 17, color: "white" }}
                  >
                    Who will be speaking? We as the community decide. <br />
                    How is this all funded? With our casino community fund.
                  </text>
                  <br />
                  <br />
                  Cheeky chimps hang together, play together and make bank
                  together! Here growing as a community is life.
                  <br />
                  <br />
                  Welcome to{" "}
                  <text style={{ textDecoration: "underline", fontSize: 25 }}>
                    The Club.
                  </text>
                </text>
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control bog">
              <img
                style={{
                  padding: 0,
                  border: "solid black 0px",
                  borderRadius: 0,
                }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
