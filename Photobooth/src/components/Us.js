import React from "react";
import { Row, Col } from "react-bootstrap";

const Us = (props) => (
    <Row className="us">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={6} lgOffset={2} lg={4}>
                    <p>Somos pioneros en Costa Rica del entretenimiento fotográfico desde el 2009 especializándonos en el ámbito del Photobooth. Somos la única empresa en contar con la mayor variedad de estilos de Photobooth</p>
                    <p>Contamos con alquiler de cabinas fotograficas de color digitales y de impresión térmica como la PhotoVocha, El MirrorBooth, El Vintage Photo Booth, y El Open Air los cuales proporcionan recuerdos instantá- neos únicos para sus invitados.</p>
                </Col>
                <Col xs={12} xsHidden smHidden md={6} lgOffset={1} lg={3} className="image-block">
                    <img src="images/photobooth-grid.png" className="img-responsive" alt="" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lgOffset={2} lg={4}></Col>
                <Col xs={12} md={6} lg={4}>
                    <ul>
                        <p>Brindamos servicio para cualquier tipo de evento corporativo, cultural o social:</p>
                        <li>Quince años</li>
                        <li>Graduaciones</li>
                        <li>Bodas</li>
                        <li>Fiestas de cumpleaños</li>
                        <li>Fiestas corporativas o eventos publicitarios</li>
                        <li>Activaciones comerciales o BTL</li>
                        <li>Ferias</li>
                        <li>Eventos culturales y más</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default Us;