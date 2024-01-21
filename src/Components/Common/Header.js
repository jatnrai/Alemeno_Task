import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./common.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Navbar bg="light" expand="sm" className='px-5'>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="logo for alemeno" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mr-auto flex-row-reverse">
        <Nav className="ml-auto">
          <Nav.Link className='navLink' as={Link} to="/student-dashboard">
            <FontAwesomeIcon icon={faUser} style={{ color: "#bababa", margin: "0 .3rem", fontSize: "18px" }} />
            Dashboard
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
