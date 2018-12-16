import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

class AdminFooter extends React.Component {
    render() {
        return (
            <footer className="admin-footer">
                <Grid fluid>
                    <Row>
                        <Col xs={12} mdOffset={2} md={10}>
                            <p>
                                Email: info@photoboothcr.com • Tel: 506 25600081
                                – 506 8845 6416
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default AdminFooter;
