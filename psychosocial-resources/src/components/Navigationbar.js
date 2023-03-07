import React, {useState} from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import migramind_sm from '../img/MigraMind1.png';
import Search from '../img/Search.png';


function Navigationbar() {

  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    // search(searchInput);
    console.log("i am clicking")
  }

  return (
      <Navbar 
      collapseOnSelect
      expand="sm"
      variant="light"
      className="color-nav"
    >
      <Navbar.Brand href="/">
        <img src={migramind_sm} width="50" heigth="30"/>
        MigraMind</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/psychology">Psychology</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSubmit}>
                  <Form.Control 
                    type="search"
                    placeholder=""
                    className="me-2"
                    aria-label="Search"
                    value={searchInput}
                    onChange={handleSearchInput}
                  />
                  <button className="search-button" variant="outline-success"><img src={Search} width="30" heigth="10"/></button>
                </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar;