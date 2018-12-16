import React from "react";
import { Row, Col } from "react-bootstrap";

class Gallery extends React.Component{
    state = {
        visible: false
    }
    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.visible){
            let packageTop = document.querySelector(`.g${this.props.index}`).offsetTop;
            if((this.props.scrollPositon.bottom - 50) >= packageTop){
                this.setState({
                    visible: true
                })
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    render(){
        return(
            <React.Fragment>
                <Col xs={12} className={this.state.visible? `gallery g${this.props.index}`:`gallery g${this.props.index} out`}>
                    <p className="top">{this.props.text}</p>
                    <Row>
                        <div className="col-40">
                            <div className="col-100 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[0]} className="img-responsive" alt="" />
                            </div>
                            <div className="col-50">
                                <p>A</p>
                            </div>
                            <div className="col-50 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[1]} className="img-responsive" alt="" />
                            </div>
                        </div>
                        <div className="col-60">
                            <div className="col-20"></div>
                            <div className="col-20 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[2]} className="img-responsive" alt="" />
                            </div>
                            <div className="col-20"></div>
                            <div className="col-20 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[3]} className="img-responsive" alt="" />
                            </div>
                            <div className="col-20"></div>
                            <div className="col-20 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[4]} className="img-responsive" alt="" />
                            </div>
                            <div className="col-20"></div>
                            <div className="col-20 image-container">
                                <div className="screen"></div>
                                <img src={this.props.images[5]} className="img-responsive" alt="" />
                            </div>
                            <div className="col-20"></div>
                        </div>
                    </Row>
                </Col>
            </React.Fragment>
        )
    }
}

export default Gallery;