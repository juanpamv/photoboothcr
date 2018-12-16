import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./fonts/myriad.ttf";
import "./fonts/venetian.ttf";
import "./css/main.scss";

import Provider from "./containers/Provider";
import App from "./containers/App";

class Router extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        );
    }
}

export default Router;
