import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/chimpy.png";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";

function onButtonClick() {
  window.open("https://cheekychimpsclub.gitbook.io/cheeky-chimps-club-play-to-earn/");
}

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
              <header className="about-title hidden" style={{ fontSize: 50, lineHeight: 0.2 }}>
                CHEEKY
              </header>
              <header
                className="about-title hidden"
                style={{ fontSize: 50, paddingTop: 0 }}
              >
                CHIMPS
              </header>
              <header className="about-title bidden">OUR STORY</header>
              <p style={{paddingTop: 0}}> </p>
              <p>
                <text
                  className="about-text"
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontFamily: "newThing",
                    fontSize: 16
                  }}
                >
                  A collection of 11,111 handcrafted 3D Cheeky Chimp NFT’s built on the Ethereum blockchain, providing holders maximum benefit and utility in a multi-platform ecosystem.
                  <p style={{paddingTop: 0}}> </p>
                  <text style={{ fontSize: 22, color: "red", fontFamily: "newerthing", lineHeight: 0 }}>
                  Web-based Casino | Casino Bull
                  </text><br />
                  Earn monthly revenue share benefits from our web-based casino - Casino Bull. Experience exclusive member-only poker tournaments, games & events and become part of The House.
                  <p style={{paddingTop: 0}}> </p>
                  <text style={{ fontSize: 22, color: "red", fontFamily: "newerthing", lineHeight: 0 }}>
                  Cheeky Chimps Love Lab
                  </text><br />
                  Stake two of your Cheeky Chimps and have the ability to breed a third Cheeky Chimp or simply accumulate in-game $JPOT. Transfer your in-game $JPOT into actual tokens to be used in our online Casino.
                  <p style={{paddingTop: 0}}> </p>
                  <text style={{ fontSize: 22, color: "red", fontFamily: "newerthing", lineHeight: 0 }}>
                  Play to Earn (P2E) 
                  </text><br />
                  Take part in an epic team-based “Play to Earn” reconnaissance mission. Stake your chimp to yield $JPOT, build your own army and collect all the battle wear needed to win the war against the notorious mobsters. 
                  <p style={{paddingTop: 0}}> </p>
                <button className="sickButton" onClick={onButtonClick}>HOW TO PLAY</button>
                <p style={{paddingTop: 0}}> </p>
                  <text style={{ fontSize: 22, color: "red", fontFamily: "newerthing", lineHeight: 0 }}>
                  Metaverse | The Club 
                  </text><br />
                  Cheeky Chimp holders will gain access to “The Club”, a purpose-built and exclusive establishment in the Somnium Space metaverse. Have a bet, play arcades or join our weekly VR meetups, featuring only the elite. 
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
