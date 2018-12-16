import React from "react";
import Hero from "./../components/Hero";
import Us from "./../components/Us";
import SectionTitle from "./../components/SectionTitle";
import PackagesGrid from "./../components/PackagesGrid";
import BlogGrid from "./../components/BlogGrid";
import BottomHero from "./../components/BottomHero";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

import { Grid } from "react-bootstrap";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Ideas creativas para eventos inolvidables"} />
                    <Us />
                    <SectionTitle title={"Paquetes"} />
                    <PackagesGrid />
                    <BlogGrid />
                    <BottomHero />
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
