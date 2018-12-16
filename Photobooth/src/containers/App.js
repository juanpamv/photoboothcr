import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Blog from "./Blog";
import Quote from "./Quote";
import Contact from "./Contact";
import NotFound from "./NotFound";

// CMS components
import Login from "./Login";
import ArticleManager from "./ArticleManager";
import CREDArticle from "./CREDArticle";

class App extends React.Component {
    state = {
        loggedIn: true
    };
    login = () => {
        this.setState({
            loggedIn: true
        });
    };
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/servicios" component={Services} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/cotizaciones" component={Quote} />
                    <Route path="/contacto" component={Contact} />
                    <Route
                        exact
                        path="/admin"
                        render={props => (
                            <Login login={this.login} {...props} />
                        )}
                    />
                    <Route
                        authed={this.state.loggedIn}
                        path="/admin/articleManager"
                        render={props => (
                            <ArticleManager
                                loggedIn={this.state.loggedIn}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        authed={this.state.loggedIn}
                        path="/admin/article"
                        render={props => (
                            <CREDArticle
                                loggedIn={this.state.loggedIn}
                                {...props}
                            />
                        )}
                    />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
