import React,{Component} from "react";
import {Navbar} from "react-bootstrap";
import "./Navbar.css";

class NavbarContainer extends Component{
    render(){
        return(
            <Navbar className="top-navbar">
            <Navbar.Header>
                <Navbar.Brand>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Text pullRight>
                <Navbar.Link href="#about">About</Navbar.Link>
                <Navbar.Link href="#categories">Categories</Navbar.Link>
                <Navbar.Link href="#login">Login</Navbar.Link>
                <Navbar.Link href="#register">Register</Navbar.Link>
            </Navbar.Text>
        </Navbar>
        )
    }
}

export default NavbarContainer;