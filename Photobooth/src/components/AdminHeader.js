import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class AdminHeader extends React.Component {
    render() {
        return (
            <Row className="admin-header">
                <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                    <h1>Blog</h1>
                    <Link to="/admin/article" className="button">
                        Agregar +
                    </Link>
                </Col>
            </Row>
        );
    }
}

export default AdminHeader;
