import React from "react";
import Hero from "./../components/Hero";
import TwoColumnsContent from "./../components/TwoColumnsContent";
import QuoteForm from "./../components/QuoteForm";
import { Grid, Row, Col } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import { validateMail, validateRequired, validatePhone } from "../helpers";


class Quote extends React.Component {
    // Initial state definition
    initialState = {
        success: false,
        service: {
            value: '',
            errorMessage: '',
        },
        hours: {
            value: '',
            errorMessage: '',
        },
        adicionals: {
            value: '',
            errorMessage: '',
        },
        name: {
            value: '',
            errorState: null,
            errorMessage: '',
        },
        phone: {
            value: '',
            errorState: null,
            errorMessage: '',
        },
        email: {
            value: '',
            errorState: null
            ,errorMessage: '',
        },
        comments: {
            value: '',
            errorState: null,
            errorMessage: '',
        },
        direction: {
            value: '',
            errorState: null,
            errorMessage: '',
        }
    }

    // Set Initial State
    state = this.initialState;

    /* =================== Update items Functionality ================= */

    // Update input for state controlled items
    inputChange = e =>{
        const inputID = e.target.name;
        let value = e.target.value;
        let inputValue = this.state[inputID];
        this.setState({
            [inputID]: {
                ...inputValue,
                value: value
            }
        })
    }

    // Update Quote items
    selectItem = (event) =>{
        event.preventDefault();
        console.log(event.target.getAttribute('data-name'));
        const   name = event.target.getAttribute('data-name'),
                value = event.target.getAttribute('data-value'),
                currentErrorState = this.state[name].errorMessage;

        this.setState({
            [name]: {
                value,
                errorMessage: currentErrorState
            }
        })
    }

    // Set error state on controlled inputs
    setErrorState = (value, input) =>{
        const inputValue = this.state[input];
        let state = null,
            errorMessage = '';

        if (value !== true) {
            state = "error";
            errorMessage = value.error;
        }

        this.setState({
            [input]: {
                ...inputValue,
                errorState: state,
                errorMessage
            }
        })

        if (state === "error") {
            return false;
        }

        return true;
    }
    
    // Clean Form | restore initial state
    handleClean = (event) =>{
        event.preventDefault();
        this.setState(this.initialState);
    }

    // Validate controlled inputs
    validate = () =>{ 
        this.setErrorState(validateRequired(this.state.name.value), 'name');
        this.setErrorState(validateMail(this.state.email.value), 'email');
        this.setErrorState(validatePhone(this.state.phone.value), 'phone');
        this.setErrorState(validateRequired(this.state.comments.value), 'comments');
        this.setErrorState(validateRequired(this.state.direction.value), 'direction');
        this.setErrorState(validateRequired(this.state.service.value), 'service');
        this.setErrorState(validateRequired(this.state.hours.value), 'hours');
        this.setErrorState(validateRequired(this.state.adicionals.value), 'adicionals');
       
        return (
            this.setErrorState(validateRequired(this.state.name.value), 'name') &&
            this.setErrorState(validateMail(this.state.email.value), 'email') &&
            this.setErrorState(validatePhone(this.state.phone.value), 'phone') &&
            this.setErrorState(validateRequired(this.state.direction.value), 'direction') &&
            this.setErrorState(validateRequired(this.state.comments.value), 'comments')
        )
    }

    /* =================== Send data to backend ================= */

    sendMail = async(e) => {
        e.preventDefault();
        
        if (this.validate()){
            await fetch("API/quote", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    name: this.state.name.value,
                    phone: this.state.phone.value,
                    email: this.state.email.value,
                    comments: this.state.comments.value,
                    direction: this.state.direction.value,
                    service: this.state.service.value,
                    hours: this.state.hours.value,
                    adicionals: this.state.adicionals.value,
                })
            }).then(res => res.json());

            this.setState({
                success: true,
            })
            
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Cotizar"} />                    
                    {
                        this.state.success?
                        <React.Fragment>
                            <TwoColumnsContent />
                            <Row>
                                <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                                    <h2 className="thanks-message">Gracias por contactarnos. El mensaje fue enviado</h2>
                                </Col>
                            </Row>
                        </React.Fragment>
                        :
                        <QuoteForm
                            inputChange={this.inputChange}
                            selectItem={this.selectItem}
                            handleClean={this.handleClean}   
                            sendMail={this.sendMail}
                            name={this.state.name}
                            phone={this.state.phone}
                            email={this.state.email}
                            comments={this.state.comments}
                            direction={this.state.direction}
                            service={this.state.service}
                            hours={this.state.hours}
                            adicionals={this.state.adicionals}                      
                        />
                    }
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Quote;
