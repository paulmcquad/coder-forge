import logo from '../assets/logo.png';

import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import styled from 'styled-components';const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; }
    padding-right: 20px;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;



export default function Header() {

const WebsiteHeader = () => {
  return (

    // <div>
    //   <ul>
    //       <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/coders">Coders</Link>
    //       </li>
    //       <li>
    //         <Link to="/frontend">Frontend</Link>
    //       </li>
    //   </ul>
    //   </div>
  <Styles>
            <Navbar bg="dark" variant="dark">
              <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
              <Navbar.Brand href="/">Coderforge</Navbar.Brand>
        <Nav className="mr-auto" >
          <Link to="/">Home</Link>  
          <Link to="/coders">Coders</Link>
          <Link to="/frontend">Frontend</Link>
          <Link to="/backend">Backend</Link>
          <Link to="/javascript">JavaScript</Link>
        </Nav>
    </Navbar>

  </Styles>

    )
  };
  
  return (
    <header>
      {WebsiteHeader()}
    </header>
  );
}