import React from 'react';
import { Row, } from 'react-bootstrap';

class Hero extends React.Component{
    render(){
        return(
            <Row>
                <div className="hero" style={ { backgroundImage: "url(/images/hero-image-desktop@2x-min.jpg)"} }>
                    <div className="content">
                        <h1>{this.props.title}</h1>
                        <p>Pioneros del entretenimiento fotográfico en Costa Rica</p>
                    </div>
                </div>
            </Row>
        )
    }
}

export default Hero;