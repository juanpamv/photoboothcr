import React from "react";
import { Grid } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import AdminFooter from "./../components/AdminFooter";
import AdminHeader from "./../components/AdminHeader";
import BlogList from "./../components/BlogList";

class ArticleManager extends React.Component {
    state = {
        blogs: []
    };
    async componentDidMount() {
        if (!this.props.loggedIn) {
            this.props.history.push("/admin");
        } else {
            const blogs = await fetch("/API/blogs").then(res => res.json());
            this.setState({
                blogs: blogs
            });
        }
    }
    render() {
        return this.props.loggedIn ? (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <AdminHeader />
                    <BlogList blogs={this.state.blogs} />
                </Grid>
                <AdminFooter />
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Grid fluid>
                    <p>Debes de loggearte para ver esta sección</p>
                </Grid>
            </React.Fragment>
        );
    }
}

export default ArticleManager;
