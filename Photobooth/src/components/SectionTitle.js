import React from "react";
import { Row, Col } from "react-bootstrap";

const SectionTitle = (props) => (
    <Row className="sectionTitle">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={8} lgOffset={2} lg={8}>
                    <h2>{props.title}</h2>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default SectionTitle;