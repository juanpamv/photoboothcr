import React from "react";
import { Row, Col } from "react-bootstrap";

const TwoColumnsContent = (props) => (
    <Row className="two-columns">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={6} lgOffset={2} lg={4}>
                    <p>Todos los Photobooth incluyen:</p>
                    <ul>
                        <li>Alquiler de la cabina fotográfica de su elección.</li>
                        <li>Impresión y entrega inmediata de un número ilimitado de impresiones.</li>
                        <li>1 Edecán encargado de resguardar y promover el uso del equipo durante el evento.</li>
                        <li>Servicio GRATIS de transporte dentro del Valle Central.</li>
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={4} className="second">   
                    <ul>
                        <li>Impresión de copias GRATIS en formato JPG.</li>
                        <li>Uso de divertidos complementos (anteojos, pelucas, sombreros).</li>
                        <li>Opción de impresión a blanco &amp; negro o a color.</li>
                        <li>Servicio GRATIS de carga a redes sociales.</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default TwoColumnsContent;