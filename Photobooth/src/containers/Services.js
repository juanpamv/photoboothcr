import React from "react";
import Hero from "./../components/Hero";
import SectionTitle from "./../components/SectionTitle";
import ServicesMenu from "./../components/ServicesMenu";
import Service from "./../components/Service";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

import { Grid } from "react-bootstrap";

class Services extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Servicios"} />
                    <SectionTitle title={"Paquetes"} />
                    <ServicesMenu />
                    <Service />
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;
