import React from "react";
import {
    Grid,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
} from "react-bootstrap";

import NavBar from "./../components/NavBar";
import AdminFooter from "./../components/AdminFooter";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        userValidation: null,
        passValidation: null,
        errorMessage: ""
    };
    inputChange = event => {
        if (event.target.name === "username") {
            this.setState({ username: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    };
    validateInputs = () => {
        if (this.state.username === "") {
            this.setState({ userValidation: "error" });
        } else {
            this.setState({ userValidation: null });
        }

        if (this.state.password === "") {
            this.setState({ passValidation: "error" });
        } else {
            this.setState({ passValidation: null });
        }

        if (this.state.username === "" && this.state.password === "") {
            this.setState({ errorMessage: "Ambos espacios son requeridos" });
            return false;
        } else {
            return true;
        }
    };
    login = async () => {
        const valid = this.validateInputs();
        if (valid) {
            const user = await fetch("API/auth", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }).then(res => res.json());

            if (user === "authenticated") {
                this.props.login();
                this.props.history.push("/admin/articleManager");
            } else {
                this.setState({
                    errorMessage:
                        "El usuario ingresado no existe, pruebe de nuevo."
                });
            }
        }
    };
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid className="login">
                    <Col xs={12} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <h1>LOGIN</h1>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup
                                controlId="formValidation1"
                                validationState={this.state.userValidation}
                            >
                                <ControlLabel>User:</ControlLabel>
                                <FormControl
                                    value={this.state.name}
                                    name="username"
                                    type="text"
                                    onChange={this.inputChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formValidation2"
                                validationState={this.state.passValidation}
                            >
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    name="password"
                                    type="password"
                                    onChange={this.inputChange}
                                />
                            </FormGroup>
                            <div className="error-message">
                                <p>{this.state.errorMessage}</p>
                            </div>
                            <button
                                text="Enviar"
                                type="button"
                                className="button btn btn-default"
                                onClick={this.login}
                            >
                                Login
                            </button>
                        </form>
                    </Col>
                </Grid>
                <AdminFooter />
            </React.Fragment>
        );
    }
}

export default Login;
