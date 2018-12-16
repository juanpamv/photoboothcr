import React from "react";
import { Row, Col } from "react-bootstrap";
import Parser from 'html-react-parser';
import { Context } from './../containers/Provider';

import Gallery from './Gallery';
import GalleryInverse from './GalleryInverse';

const Service = (props) => (
    <React.Fragment>
        <Context.Consumer>
            {(context) => (
                context.state.packages.map((service, index) => {
                    return(
                        <Row className={`service`} key={index} >
                            <Col xs={12}>
                                <Row>
                                    <div className="hero-block">
                                        <img src={ service.heroImage } className="img-responsive" alt="" />
                                        <Col xs={12} xsOffset={0}  sm={10} smOffset={2} className="service-title">
                                            <h2>{ service.name }</h2>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <Col xs={12} smOffset={2} sm={8} mdOffset={0} md={7} lgOffset={2} lg={5}>
                                        { Parser(service.description) }
                                    </Col>
                                    <Col xsHidden smHidden mdOffset={1} md={3} lgOffset={1} lg={3} className="blue-square">
                                        <img src={service.machineImage} alt={'imagen'}  className={service.name.split(' ').join('-').toLowerCase()}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xsHidden smHidden mdOffset={5} md={3} lgOffset={5} lg={3} className="blue-square"></Col>
                                </Row>
                            </Col>
                            {
                                ((index % 2) === 0)? 
                                <Gallery images={service.gallery} text={service.galleryWorld} scrollPositon={context.state.scroll} index={index} />
                                : 
                                <GalleryInverse images={service.gallery} text={service.galleryWorld} scrollPositon={context.state.scroll} index={index} />
                            }
                        </Row>
                    )
                })
            )}
        </Context.Consumer>
    </React.Fragment>
)

export default Service;