import React from 'react';
import { Grid, Row, Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <header>
                <Grid fluid={true}>
                    <Row>
                        <Navbar inverse collapseOnSelect fixedTop={true} fluid={true}>
                            <Navbar.Header>
                                <Navbar.Brand>
                                <a href="/">
                                    <img src="/images/photobooth@2x.png" alt="Photobooth Costa Rica" className="logo" />
                                </a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1} href="/">
                                        Home
                                    </NavItem>
                                    <NavItem eventKey={2} href="/servicios">
                                        Servicios
                                    </NavItem>
                                    <NavItem eventKey={2} href="/cotizaciones">
                                        Cotizaciones
                                    </NavItem>
                                    <NavItem eventKey={2} href="/contacto">
                                        Contacto
                                    </NavItem>
                                    <NavItem eventKey={1} href="/blog">
                                        Blog
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Grid>
            </header>
        )
    }
}

export default NavBar;