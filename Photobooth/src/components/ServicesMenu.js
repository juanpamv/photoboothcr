import React from "react";
import { Row, Col } from "react-bootstrap";
import { Context } from './../containers/Provider';

class ServicesMenu extends React.Component{
    scrollTo = (event) => {
        event.preventDefault();
        const service = event.target.getAttribute('data-service');
        console.log(event.target);
    }
    render(){
        return(
            <Context.Consumer>
                {(context) => (
                    <Row className="services-menu">
                        <Col xs={12} className="icons">
                            <Row>
                                <Col xsHidden smHidden xs={6} md={2} lg={2}></Col>
                                {
                                    context.state.packages.map((service, index) => {
                                        return(
                                            <Col xs={6} md={2} lg={2} className="icon" key={index} onClick={this.scrollTo} data-service={service.name.split(' ').join('-').toLowerCase()}>
                                                <div className="img-container">
                                                    <img src={service.icon} className={service.name.split(' ').join('-').toLowerCase()} alt='' />
                                                </div>
                                                <p>{service.name}</p>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                )}
            </Context.Consumer>
        )
    }
}

export default ServicesMenu;