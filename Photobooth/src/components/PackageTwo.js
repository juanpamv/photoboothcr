import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

class PackageTwo extends React.Component {
    state = {
        visible: false
    }
    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.visible){
            let packageTop = document.querySelector('.package-two').offsetTop;
            if((this.props.scrollPositon.bottom - 50) >= packageTop){
                this.setState({
                    visible: true
                })
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    render(){
        return(
            <Row className={this.state.visible? 'package-two':'package-two out'}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12} smHidden mdHidden lgHidden className="button-container">
                            <p>{this.props.service.name}</p>
                            <Link to="/servicios">
                                Ver más
                            </Link>
                        </Col>
                        <Col xs={12} sm={5} mdOffset={1} md={5} lgOffset={1} lg={5} className="image-container">
                            <div className="screen"></div>
                            <img src={this.props.service.homeImage} alt={'imagen'} className="img-responsive" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <Row>
                                <Col xsHidden xs={12} md={6} lg={6} className="button-container">
                                    <p>{this.props.service.name}</p>
                                    <Link to="/servicios">
                                        Ver más
                                    </Link>
                                </Col>
                                <Col xs={12} md={6} lg={6}></Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="second-block">
                            <Row>
                                <Col xsHidden xs={6} md={6} lg={6} className="blue-square">
                                    <img src={this.props.service.machineImage} alt={'imagen'} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default PackageTwo;