import React from "react";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="/home">Books 2022</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/readingstats">Reading Stats</Nav.Link>
                <Nav.Link href="/newbookform">New Book</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar