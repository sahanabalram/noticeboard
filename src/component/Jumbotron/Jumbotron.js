import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";
import "./Jumbotron.css";

class JumbotronContainer extends Component {
    render() {
        return (
            <Jumbotron>
                <h1 id="notice-board">Notice Board</h1>
                <p>
                    This is an online web application to display any notice that you would like people to see.
                </p>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer;