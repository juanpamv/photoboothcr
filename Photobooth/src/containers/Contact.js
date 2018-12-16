import React from "react";
import Hero from "./../components/Hero";
import ContactForm from "./../components/ContactForm";
import { Grid, Row, Col } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

import { validateMail, validateRequired, validatePhone } from "../helpers";

class Contact extends React.Component {
    initialState = {
        success: false,
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
        }
    }
    
    // Set Initial State
    state = this.initialState;
 
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

    validate = () =>{ 
        this.setErrorState(validateRequired(this.state.name.value), 'name');
        this.setErrorState(validateMail(this.state.email.value), 'email');
        this.setErrorState(validatePhone(this.state.phone.value), 'phone');
        this.setErrorState(validateRequired(this.state.comments.value), 'comments');
                
        return (
            this.setErrorState(validateRequired(this.state.name.value), 'name') &&
            this.setErrorState(validateMail(this.state.email.value), 'email') &&
            this.setErrorState(validatePhone(this.state.phone.value), 'phone') &&
            this.setErrorState(validateRequired(this.state.comments.value), 'comments')
        )
    }

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

    sendMail = async(e) => {
        e.preventDefault();
        
        if (this.validate()){
            await fetch("API/contact", {
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
                    comments: this.state.comments.value
                })
            }).then(res => res.json());

            this.setState({
                success: true,
            })
            
        }
    }
    
    cleanForm = (e) =>{
        e.preventDefault();
        this.setState(this.initialState);
    }
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Contactenos"} />
                    {
                        this.state.success?
                        <Row>
                            <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                                <h2 className="thanks-message">Gracias por contactarnos. El mensaje fue enviado</h2>
                            </Col>
                        </Row>
                        :
                        <ContactForm 
                            sendMail={this.sendMail}
                            cleanForm={this.cleanForm} 
                            inputChange={this.inputChange}
                            name={this.state.name}
                            phone={this.state.phone}
                            email={this.state.email}
                            comments={this.state.comments} 
                        />
                    }
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
