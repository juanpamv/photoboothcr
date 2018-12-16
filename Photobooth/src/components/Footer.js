import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Grid fluid>
                    <Row>
                        <Col xs={12} mdOffset={1} md={2}>
                            <img src="images/photobooth@2x.png" alt="Photobooth Costa Rica" className="logo" />
                        </Col>
                        <Col xs={12} mdOffset={1} md={3}>
                            <h3>Contactenos</h3>
                            <p>Email: info@photoboothcr.com</p>
                            <p>Tel: 506 2560 0081 – 506 8845 6416</p>
                        </Col>
                        <Col xs={12} md={3} className="social-container">
                            <p>
                            <a href='https://www.facebook.com/photoboothcr/' className="social" rel="noopener noreferrer" target="_blank">
                                <img src='images/facebook-white-icon.svg' alt="" />
                            </a> 
                            <a href='https://twitter.com/PhotoBoothCR' className="social" rel="noopener noreferrer" target="_blank">
                                <img src='images/twitter-white-icon.svg' alt="" />
                            </a>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}

export default Footer;