import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/utils/1.png';
import ImageBoy2 from '../../assets/utils/2.png';
import ImageBoy3 from '../../assets/utils/3.png';
import ImageBoy4 from '../../assets/utils/4.png';
import ImageBoy5 from '../../assets/utils/5.png';
import ImageBoy6 from '../../assets/utils/6.png';

//import CSS
import './leet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class leet extends React.Component {
    render() {

        return (
            <div className='leet-control' id="team">
                <Container>
                    <header style={{ textAlign: "center", color: "white" }}>
                        <br /> <span style={{ fontStyle: "normal" }}></span>
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
                    slidesToShow={3}
                    scrollOnDevice={true}
                >
                    <div>
                        <img className="caroImg" src={ImageBoy1} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy2} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy3} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy4} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy5} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy6} alt='boy2' />
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

export default leet;