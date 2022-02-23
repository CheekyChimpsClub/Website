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
                    tag: 'OPERATION 1',
                    title: 'RELEASE THE CHEEKY CHIMPS',
                    content: "Our Cheeky Chimps will be released in 2 parts:\n \n(1) Pre-Sale MINT: Friday 28th Jan @ 2pm EST \n(2) Public MINT: Saturday 29th Jan @ 2pm EST \n\nMaximum mint during pre-sale and public sale will be ten Cheeky Chimps per wallet. \n\nEach Cheeky Chimp’s identity will be revealed 72 hours after the minting process has concluded."
                },
                {
                    tag: 'Operation 2',
                    title: 'CHEEKY CHIMPS CLUB - CASINO LAUNCH',
                    content: "The moment we’ve all been waiting for… our very own online casino goes live! Play over 5,000 of your favourite online casino games as well as live sport book betting. We will be hosting our launch party in several locations to cater for as many Cheeky Chimp owners as possible."
                },
                {
                    tag: 'Operation 3',
                    title: '$JPOT - TOKEN REVEAL ',
                    content: 'In order to recapture their beloved casino, our chimps need tokens. We will release the $JPOT token to allow our Cheeky Chimp holders to conquer the mob and regain control.'
                },
                {
                    tag: 'Operation 5',
                    title: 'MISSION COMMENCEMENT',
                    content: 'Stake your Chimp to yield $JPOT and use your in-game $JPOT to purchase battle wear to upgrade your Cheeky Chimp in this multi-mission play to earn operation.'
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