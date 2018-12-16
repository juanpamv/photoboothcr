import React from "react";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

import { Grid } from "react-bootstrap";

class Blog extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <h1>Blog</h1>
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;
