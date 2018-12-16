import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import ErrorMessage from './ErrorMessage';

const ContactForm = (props) => (
    <Row className="contact-form">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <form id="contactForm">
                                <FormGroup controlId="formValidationSuccess1" validationState={props.name.errorState}>
                                    <ControlLabel>Nombre:</ControlLabel>
                                    <FormControl 
                                        value={props.name.value}
                                        name="name"
                                        type="text"
                                        onChange={props.inputChange} 
                                    />
                                    <ErrorMessage message={props.name.errorMessage} />
                                </FormGroup>
                                <FormGroup controlId="formValidationSuccess1" validationState={props.phone.errorState}>
                                    <ControlLabel>Teléfono:</ControlLabel>
                                    <FormControl value={props.phone.values}
                                        name="phone"
                                        type="text"
                                        onChange={props.inputChange} 
                                    />
                                    <ErrorMessage message={props.phone.errorMessage} />
                                </FormGroup>
                                <FormGroup controlId="formValidationSuccess1" validationState={props.email.errorState}>
                                    <ControlLabel>Email:</ControlLabel>
                                    <FormControl value={props.email.value}
                                        name="email"
                                        type="email"
                                        onChange={props.inputChange} />
                                    <ErrorMessage message={props.email.errorMessage} />
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea" validationState={props.comments.errorState}>
                                    <ControlLabel>Comentarios:</ControlLabel>
                                    <FormControl 
                                        componentClass="textarea" 
                                        value={props.comments.value}
                                        name="comments"
                                        onChange={props.inputChange} />
                                    <ErrorMessage message={props.comments.errorMessage} />
                                </FormGroup>
                                <button
                                    text="Limpiar"
                                    type="submit"
                                    className="button btn btn-default"
                                    onClick={props.cleanForm}
                                >
                                    Limpiar
                                </button>
                                <button
                                    text="Enviar"
                                    type="submit"
                                    className="button btn btn-default"
                                    onClick={props.sendMail}
                                >
                                    Enviar
                                </button>
                            </form>
                        </Col>
                        <Col xs={12} xsHidden smHidden md={6} lgOffset={1} lg={5} className="image-block">
                            <img src="images/photobooth-grid.png" className="img-responsive image" alt="" />
                            <p>Email: info@photoboothcr.com</p>
                            <p>Tel: 506 2560 0081 – 506 8845 6416</p>
                            <p>Síguenos: 
                                <a href='https://www.facebook.com/photoboothcr/' className="social" rel="noopener noreferrer" target="_blank">
                                    <img src='images/facebook-blue-icon.svg' alt="" />
                                </a> 
                                <a href='https://twitter.com/PhotoBoothCR' className="social" rel="noopener noreferrer" target="_blank">
                                    <img src='images/twitter-blue-icon.svg' alt="" />
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default ContactForm;