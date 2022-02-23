import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './boadmap.css';

//import Assets
import il from '../../assets/dice.png';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'OPERATION ONE',
                    title: 'RELEASE THE CHEEKY CHIMPS',
                    content: "Our Cheeky Chimps will be released in parts: \nOG Genesis 1212 Mint: 28th January 2022 - 1,212 Chimps - SOLD OUT. \nPhase 2 Mint: 22nd February 2022 - 2,222 Chimps."
                },
                {
                    tag: 'Operation TWO',
                    title: 'LET THE BREEDING BEGIN',
                    content: "Our Cheeky Chimps Love Lab is ready to go! Breed two of your Cheeky Chimps over the required time period and have the ability to breed a third chimp. Breeding platform will go live February 2022."
                },
                {
                    tag: 'Operation THREE',
                    title: '$JPOT - TOKEN REVEAL & STAKING',
                    content: 'On 11th March, we will be launching our $JPOT token. Stake your Chimps to earn $JPOT tokens which can be used to grow your Chimp family, acquire battle wear to help conquer the mob in our P2E game and to play in our soon to be launched casino.'
                },
                {
                    tag: 'Operation FOUR',
                    title: 'CASINO BULL & LAUNCH PARTY',
                    content: 'In March 2022, our very own online casino goes live - Casino Bull:  https://casinobull.io/. Play over 5,000 of your favourite online casino games as well as live sportsbook betting. \n\nAt this stage, we also anticipate hosting our Cheeky Chimps launch party in several locations to cater for as many holders as possible.'
                },
                {
                    tag: 'Operation FIVE',
                    title: 'MISSION COMMENCEMENT',
                    content: 'Use your in-game $JPOT (collected from staking your chimps) to purchase battle wear and upgrade your Cheeky Chimp in this multi-mission P2E operation.'
                }
                
            ]
        }
    }

    render() {
        return (
            <div className='boadmap-control' id='roadmap' style={{textAlign: "center"}}>
                <Container >
                    
                    {/* <p className='roadmap-description'>
                    Our Roadmap is under construction!Placeholder
                    </p> */}
                    <Row style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                        <Col xs={12} md={6}>
                            <img src={il} style={{width:"100%"}}/>
                        </Col>
                        <Col  style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                        <text><header className="boadmap-title" > ROAD MAP</header></text>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return(
                                        <RoadMapItem style={{textAlign: "center", color: "black"}}key={index}
                                            tag= {item.tag}
                                            title= {item.title}
                                            content= {item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default RoadMap;