import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            {/* <Navbar.Brand href="/">ProShop</Navbar.Brand> */}
            <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* Change from Nav.Link to LinkContainer, it will inside convert from a to link tag
                stopping the whole page to load fullly and act like a spa instead */}
                {/* <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link> */}
                <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                <Nav.Link >
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
