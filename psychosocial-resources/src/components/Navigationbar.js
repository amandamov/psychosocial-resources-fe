import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import migramind_sm from '../img/migramind_sm.png';


function Navigationbar() {
  return (
      <Navbar
      collapseOnSelect
      expand="sm"
      bg = "dark"
      variant="dark"
    >
      <Navbar.Brand>
        <img src={migramind_sm} width="30" heigth="30"/>
        MigraMind</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Events</Nav.Link>
          <Nav.Link>News</Nav.Link>
          <Nav.Link>About us</Nav.Link>
        </Nav>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <button variant="outline-success">Search</button>
                </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar;