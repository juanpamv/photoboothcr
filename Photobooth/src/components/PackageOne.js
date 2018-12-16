import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

class PackageOne extends React.Component {
    state = {
        visible: false
    }
    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.visible){
            let packageTop = document.querySelector('.package-one').offsetTop;
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
            <Row className={this.state.visible? 'package-one':'package-one out'}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12} sm={5} mdOffset={2} md={3} lgOffset={2} lg={3} className="button-container">
                            <p>{this.props.service.name}</p>
                            <Link to="/servicios">
                                Ver más
                            </Link>
                        </Col>
                        <Col xs={12} sm={7} md={7} lg={7} className="image-container">
                            <div className="screen"></div>
                            <img src={this.props.service.homeImage} alt={'imagen'} className="img-responsive" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xsHidden xsOffset={2} xs={3} mdOffset={2} md={3} lgOffset={2} lg={3} className="blue-square">
                            <img src={this.props.service.machineImage} alt={'imagen'} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default PackageOne;