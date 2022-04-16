import React, { Component } from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">E-Study</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/result">Result</NavDropdown.Item>
                <NavDropdown.Item href="club-committee">Club-Committee</NavDropdown.Item>
                <NavDropdown.Item href="time-table">Time-Table</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="contectus">Contect Us</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
                Login
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header