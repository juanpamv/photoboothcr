import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Context } from '../containers/Provider';
import ErrorMessage from './ErrorMessage';

const QuoteForm = (props) => (
    <Row className="quote-form">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                    <p className="block-title">Elige un servicio:</p>
                    <ErrorMessage message={props.service.errorMessage} />
                    <Context.Consumer>
                        {(context) => (
                            <Row className="services-menu">
                                <Col xs={12} className="icons">
                                    <Row>
                                        {
                                            context.state.packages.map((service, index) => {
                                                return(
                                                    <Col xs={6} md={2} lg={3} 
                                                        key={index} 
                                                        onClick={props.selectItem}  
                                                        className={props.service.value === `${index}`? 'icon selected':'icon'} 
                                                        data-name="service"
                                                        data-value={`${index}`}>
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
                </Col>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                    <p className="block-title">Duración del servicio:</p>
                    <ErrorMessage message={props.hours.errorMessage} />
                    <Row className="answers">
                        <Col xs={6} md={2} lg={3}>
                            <p onClick={props.selectItem} className={props.hours.value === '2'? 'selected':''} data-name="hours" data-value="2">2 horas</p>
                        </Col>
                        <Col xs={6} md={2} lg={3}>
                            <p onClick={props.selectItem}  className={props.hours.value === '3'? 'selected':''} data-name="hours" data-value="3">3 horas</p>
                        </Col>
                        <Col xs={6} md={2} lg={3}>
                            <p onClick={props.selectItem}  className={props.hours.value === '4'? 'selected':''} data-name="hours" data-value="4">4 horas</p>
                        </Col>
                        <Col xs={6} md={2} lg={3}>
                            <p onClick={props.selectItem}  className={props.hours.value === '5'? 'selected':''} data-name="hours" data-value="5">5 horas</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                    <p className="block-title">Adicionales:</p>
                    <ErrorMessage message={props.adicionals.errorMessage} />
                    <Row className="answers">
                        <Col xs={6} md={2} lg={4}>
                            <p  onClick={props.selectItem} 
                                className={props.adicionals.value === '1'? 'selected':''} 
                                data-name="adicionals" 
                                data-value="1">
                                Mesa con álbum de fotografías
                            </p>
                        </Col>
                        <Col xs={6} md={2} lg={4}>
                            <p  onClick={props.selectItem} 
                                className={props.adicionals.value === '2'? 'selected':''} 
                                data-name="adicionals"
                                data-value="2">
                                1 Edecán adicional por una hora
                            </p>
                        </Col>
                        <Col xs={6} md={2} lg={4}>
                            <p  onClick={props.selectItem} 
                                className={props.adicionals.value === '3'? 'selected':''} 
                                data-name="adicionals"
                                data-value="3">
                                Alquilar Photo Vocha como cabina
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                    <p className="block-title">Información de contácto:</p>
                    <Row>
                        <form onSubmit={props.handleSubmit}>
                        <Col xs={12} md={6} lg={6}>
                            <FormGroup controlId="formValidationSuccess1" validationState={props.email.errorState}>
                                <ControlLabel>Nombre:</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    name="name" 
                                    value={props.name.value} 
                                    onChange={props.inputChange} 
                                />
                                <ErrorMessage message={props.name.errorMessage} />
                            </FormGroup>
                            <FormGroup controlId="formValidationSuccess1" validationState={props.phone.errorState}>
                                <ControlLabel>Teléfono:</ControlLabel>
                                <FormControl 
                                    type="text" name="phone" 
                                    value={props.phone.value} 
                                    onChange={props.inputChange} 
                                />
                                <ErrorMessage message={props.phone.errorMessage} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <FormGroup controlId="formValidationSuccess1" validationState={props.email.errorState}>
                                <ControlLabel>Email:</ControlLabel>
                                <FormControl 
                                    type="text" name="email" 
                                    value={props.email.value} 
                                    onChange={props.inputChange} 
                                />
                                <ErrorMessage message={props.email.errorMessage} />
                            </FormGroup>
                            <FormGroup controlId="formValidationSuccess1" validationState={props.direction.errorState}>
                                <ControlLabel>Dirección del evento:</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    name="direction" 
                                    value={props.direction.value} 
                                    onChange={props.inputChange} 
                                />
                                <ErrorMessage message={props.direction.errorMessage} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <FormGroup controlId="formControlsTextarea"  
                                validationState={props.comments.errorState}
                            >
                                <ControlLabel>Comentarios:</ControlLabel>
                                <FormControl 
                                    componentClass="textarea" 
                                    placeholder="" name="comments" 
                                    value={props.comments.value} 
                                    onChange={props.inputChange} 
                                />
                                <ErrorMessage message={props.comments.errorMessage} />
                            </FormGroup>

                            <button
                                text="Limpiar"
                                type="submit"
                                className="button btn btn-default"
                                onClick={props.handleClean}
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
                        </Col>
                        </form>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
)   


export default QuoteForm;