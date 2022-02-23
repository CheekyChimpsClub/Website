import React from "react";
import { Collapse } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";

//import CSS
import './roadmapitem.css';
class RoadMapItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render () {
        const isBreed = this.props.tag;
        let breedbutton;
        if(isBreed === "Operation TWO") {
            breedbutton = '<br><p><a class="sickButton" style="color: #fff; text-decoration: none; transition-duration: .2s; font-family: newerthing; border: solid white 3px; padding: 5px; font-size: 20px; border-radius: 10px; background-color: rgb(255, 0, 0); box-shadow: 0px 0px 25px red; padding-left: 10px; padding-right: 10px;" href="https://breed.cheekychimps.club/app/" target="_blank">Let\'s Breed!</a></p>';
        }
        return (
            <div>
                <div onClick={() => {this.setState({open: !this.state.open})}}
                    // aria-controls='example'
                    // aria-expanded={this.state.open}
                    className='collapse-header-control' >
                    <div className='collapse-header'>
                        {/* <h4>{this.props.tag}</h4> */}
                        <p style={{fontSize: 25, textAlign: "left"}}><text style={{color: "red"}}>{this.props.tag}:</text> {this.props.title}</p>
                    </div>
                    {/* <BsPlusLg /> */}
                </div>
                {/* <Collapse in={this.state.open}> */}
                    <div id="example" className='collapse-content display-linebreak'>
                        {this.props.content}
                        <div dangerouslySetInnerHTML={{ __html: breedbutton}} />
                    </div>
                {/* </Collapse> */}
            </div>
        );
    }
}

export default RoadMapItem;