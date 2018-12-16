import React from "react";
import { Row, Col, Glyphicon } from "react-bootstrap";

class BlogList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="blog-list">
                    <Row className="header">
                        <Col xs={2} md={2} lg={2} className="center">
                            <p>Fecha</p>
                        </Col>
                        <Col xs={8} md={8} lg={8}>
                            <p>Titulo</p>
                        </Col>
                        <Col xs={1} md={1} lg={1} className="center">
                            <p>Editar</p>
                        </Col>
                        <Col xs={1} md={1} lg={1} className="center">
                            <p>Borrar</p>
                        </Col>
                    </Row>
                    {this.props.blogs
                        ? this.props.blogs.map((blog, key) => {
                              return (
                                  <Row className="article" key={key}>
                                      <Col
                                          xs={2}
                                          md={2}
                                          lg={2}
                                          className="center"
                                      >
                                          <p>{blog.date.substring(0, 10)}</p>
                                      </Col>
                                      <Col xs={8} md={8} lg={8}>
                                          <p>{blog.title}</p>
                                      </Col>
                                      <Col
                                          xs={1}
                                          md={1}
                                          lg={1}
                                          className="center"
                                      >
                                          <p>
                                              <Glyphicon glyph="pencil" />
                                          </p>
                                      </Col>
                                      <Col
                                          xs={1}
                                          md={1}
                                          lg={1}
                                          className="center"
                                      >
                                          <p>
                                              <Glyphicon glyph="remove" />
                                          </p>
                                      </Col>
                                  </Row>
                              );
                          })
                        : ""}
                </Col>
            </React.Fragment>
        );
    }
}

export default BlogList;
