import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import Logo from "../assets/images/logogenerico.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";

// hay un "NavBar" que es un component y otro "Navbar" de bootstrap

const NavBar = () => {
    return (
        <header>
            <Navbar className="App-navbar" bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img className="App-logo" src={Logo} alt="Logo Genérico"></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center ms-auto me-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">
                                    <span> Home </span>
                                </Nav.Link>
                            </Nav.Item>
                           
                            <Nav.Item>
                                <Nav.Link as={Link} to="category/zapatillas">
                                    <span> Zapatillas </span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="category/indumentaria">
                                    <span> Indumentaria </span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
