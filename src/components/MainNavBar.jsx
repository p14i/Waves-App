import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import waves_logo from '../assets/waves_logo.png'
import Button from 'react-bootstrap/Button';


function MainNavBar() {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='custom-navbar'>
      <Container >
        <Navbar.Brand href="/">
        <img
    src={waves_logo} // or your image path
    alt="MyApp Logo"
    height="70"
    className="d-inline-block align-top"
  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/celebrities">Celebrities</Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>           */}
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='align-items-center '>
            <Nav.Link 
              href="#"
              style={{
                border: '1px solid #ddd',
                borderRadius: '0.375rem'
              }}
              className='custom-button-text'
            > Login
            </Nav.Link>
            <Nav.Link href="#"
            className='custom-button'>
              <Button>
                Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
