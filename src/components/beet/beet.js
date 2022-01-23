import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/team/Binusha.jpg';
import ImageBoy2 from '../../assets/team/Dirk.jpg';
import ImageBoy3 from '../../assets/team/Emma.jpg';
import ImageBoy4 from '../../assets/team/Sean.jpg';
import ImageBoy5 from '../../assets/team/Gabi.jpg';
import ImageBoy6 from '../../assets/team/Luke.jpg';
import ImageBoy7 from '../../assets/team/Peter.jpg';

//import CSS
import './beet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class beet extends React.Component {
    render() {

        return (
            <div className='beet-control' id="team5">
                <Container>
                    <header style={{ textAlign: "center", color: "white" }}>
                        <br /> <span style={{ fontStyle: "normal" }}>TEAM MEMBERS</span>
                    </header>
                </Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    dots={false}
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <div>
                        <img className="caroImg" src={ImageBoy1} alt='boy2' />
                        <h1 style={{color: "white"}}>Binusha</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Artwork</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy2} alt='boy2' />
                        <h1 style={{color: "white"}}>Dirk</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Visionary</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy3} alt='boy2' />
                        <h1 style={{color: "white"}}>Emma</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Copywriter</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy4} alt='boy2' />
                        <h1 style={{color: "white"}}>Sean</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Developer</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy5} alt='boy2' />
                        <h1 style={{color: "white"}}>Gabi</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Socials</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy6} alt='boy2' />
                        <h1 style={{color: "white"}}>Luke</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Executor</h1>
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy7} alt='boy2' />
                        <h1 style={{color: "white"}}>Peter</h1>
                        <h1 style={{color: "white", fontSize: 20}}>Story / Marketing</h1>
                    </div>





                </InfiniteCarousel>

                {/* <Container>
                    <div className='slide-arrows'>
                        <a>
                            <BsArrowLeftShort size={40} />
                        </a>
                        <a>
                            <BsArrowRightShort size={40} />
                        </a>
                    </div>
                </Container> */}
                {/* <Container>
                    <div className='remaining'>
                        <span>0</span>
                        <p>SPOOKIES REMAINING</p>
                    </div>
                </Container> */}
            </div>

        );
    }
}

export default beet;