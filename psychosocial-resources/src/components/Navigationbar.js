import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import migramind_sm from '../img/migramind_tp.png';


function Navigationbar() {
  return (
      <Navbar 
      collapseOnSelect
      expand="sm"
      variant="light"
      className="color-nav"
    >
      <Navbar.Brand href="/">
        <img src={migramind_sm} width="40" heigth="30"/>
        MigraMind</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
        <Form className="d-flex">
                  <Form.Control 
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <button variant="outline-success" >Search</button>
                </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar;