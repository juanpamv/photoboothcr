import React from "react";

import Packages from "./../data/packages";

const Context = React.createContext();

class Provider extends React.Component {
    state = {
        packages: Packages,
        loggedIn: false,
        name: "juanpa",
        scroll: {
            top: 0,
            bottom: 0
        }
    };
    handleScroll = () => {
        let top = window.scrollY;
        let bottom = window.scrollY + window.innerHeight;
        this.setState({
            scroll: {
                top,
                bottom
            }
        });
    };
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };
    render() {
        return (
            <Context.Provider value={{ state: this.state }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export { Context };
export default Provider;
