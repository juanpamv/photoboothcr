import React from "react";
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import AdminFooter from "./../components/AdminFooter";
import CREDMenu from "./../components/CREDMenu";

class CREDArticle extends React.Component {
    state = {
        title: "",
        heroImage: [],
        body: [ 'text', '/']
    };

    // Check user authentication
    componentDidMount() {
        if (!this.props.loggedIn) {
            return this.props.history.push("/admin");
        }
    }

    // Post data to service to add Blog
    addBlog = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('heroImage', new Blob(this.state.heroImage));
        formData.append('title', "this is the title");
        formData.append('body', "this is the body");

        console.log(formData);

        const addBlog = await fetch("/API/addBlog", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
            credentials: "include",
            headers: {
                Accept: 'application/json',
            },
        }).then(res => console.log(res));

        console.log(addBlog);

    };

    // build body content
    buildBodyArray = () =>{
        const body = this.state.body,
            convertedArray = body.map(item => {
                if (!item.startsWith("/")){ 
                    return `<p>${item}</p>`
                }else{
                    return `<img src="${item}" />`
                }
            });
            
        return convertedArray;
    }

    // Add text input to body
    addText = () => {
        const body = this.state.body;
        body.push('');
        this.setState({
            body
        })
    };

    // Add image input to body
    addImg = () => {
        const body = this.state.body;
        body.push('/');
        this.setState({
            body
        })
    };

    //update input data
    updateBody = e =>{
        const body = this.state.body,
            inputID = e.target.id,
            value = e.target.value;

        body[inputID] = value;

        this.setState({
            body
        })
    }

    //update input data
    updateInput = e =>{
        const inputID = e.target.id;
        let value = e.target.value;

        if (inputID == "heroImage"){
            value = new FormData();
            value.append('heroImage', e.target.files[0])

            console.log(value);
        }

        this.setState({
            [inputID]: value
        })
    }

    render() {
        return this.props.loggedIn ? (
            <React.Fragment>
                <NavBar />
                <Grid fluid className="CRED-article">
                    <Row className="admin-header">
                        <Col
                            xs={12}
                            md={12}
                            lgOffset={2}
                            lg={8}
                            className="block"
                        >
                            <h1>Create Article</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} lgOffset={2} lg={6}>
                            <form encType='multipart/form-data'>
                                <FormGroup
                                    controlId="title"
                                    validationState={null}
                                >
                                    <ControlLabel>Titulo:</ControlLabel>
                                    <FormControl type="text" value={this.state.title} onChange={this.updateInput} />
                                </FormGroup>
                                <FormGroup
                                    controlId="heroImage"
                                    validationState={null}
                                >
                                    <ControlLabel>Imágen del Hero:</ControlLabel>
                                    <FormControl type="file" onChange={this.updateInput} />
                                </FormGroup>
                                <hr />
                                <p>Contenido:</p>
                                {this.state.body.map((block, key) => {
                                    if (!block.startsWith("/")) {
                                        return (
                                            <FormGroup
                                                controlId={`${key}`}
                                                validationState={null}
                                                key={key}
                                            >
                                                <FormControl type="text" value={block} onChange={this.updateBody} />
                                            </FormGroup>
                                        );
                                    } else if (block.startsWith("/")) {
                                        return (
                                            <FormGroup
                                                controlId={`${key}`}
                                                validationState={null}
                                                key={key}
                                            >
                                                <ControlLabel>Imágen:</ControlLabel>
                                                <FormControl type="file" />
                                            </FormGroup>
                                        );
                                    }
                                })}
                                <button className="button" onClick={this.addBlog}>Crear Blog</button>
                            </form>
                        </Col>
                        <Col xs={12} md={4} lg={2}>
                            <CREDMenu addText={this.addText} addImg={this.addImg} />
                        </Col>
                    </Row>
                </Grid>
                <AdminFooter />
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Grid fluid>
                    <p>Debes de loggearte para ver esta sección</p>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CREDArticle;
