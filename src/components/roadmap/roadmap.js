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
                    tag: 'Phase 1',
                    title: 'RELEASE THE CHEEKY CHIMPS',
                    content: "Our Cheeky Chimps will be released in 2 parts: \n(1) Pre-Sale: 1,111 Cheeky Chimps available to mint and \n(2) Public Sale: 10,000 Cheeky Chimps available to mint. Max mint during pre-sale will be three \n Cheeky Chimps per wallet and public sale will be capped at ten (10) Cheeky Chimps per wallet."
                },
                {
                    tag: 'Phase 2',
                    title: 'WELCOME TO THE CHEEKY CHIMPS',
                    content: "All Cheeky Chimps will be revealed 72 hours after the minting process has been concludes. \nEach Cheeky Chimp’s rarity will be revealed, granting holders access to some awesome events including sports, festivals and concerts!"
                },
                {
                    tag: 'Phase 3',
                    title: 'Cheeky Chimps Club - Casino Launch',
                    content: 'The moment we’ve all been waiting for… our very own online casino goes live! Play over 5,000 of your favourite online casino games as well as live sport book betting. We will be hosting our launch party in several locations to cater for as many Cheeky Chimp owners as possible. '
                },
                {
                    tag: 'Phase 5',
                    title: 'Cheeky Chimps Club – Metaverse “The Club” Launch',
                    content: 'Somnium Space is our chosen metaverse and The Club will be launched exclusively to our NFT holders. Come and have a bet, play some arcade games or just mingle with our community. We will also be hosting a heap of prize giveaways on the night… so the best really is yet to come!'
                },
                {
                    tag: 'Phase 4',
                    title: 'Cheeky Chimps Club - Token Reveal',
                    content: 'The fun doesn’t stop there! It’s only fitting that our Cheeky Chimps have their own token to play with in the Cheeky Chimps Club! We will also be releasing Cheeky Chimp owner bonuses and rewards tiers.'
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