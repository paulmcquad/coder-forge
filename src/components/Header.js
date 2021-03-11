import logo from '../assets/logo.png';

import React from "react";
//import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import styled from 'styled-components';const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; }
    padding-right: 20px;
    text-decoration: none;
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

.nav-item {
  padding-left: 5px;
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
  // <Styles>
  //           <Navbar bg="dark" variant="dark">
  //             <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
  //             <Navbar.Brand href="/">Coderforge</Navbar.Brand>
  //       <Nav className="mr-auto" >
  //         <Link to="/">Home</Link>  
  //         <Link to="/coders">Coders</Link>
  //         <Link to="/frontend">Frontend</Link>
  //         <Link to="/backend">Backend</Link>
  //         <Link to="/javascript">JavaScript</Link>
  //       </Nav>
  //     </Navbar>
  <Styles>
        
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
    <a class="navbar-brand" href="/">Coderforge</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/">Home</Link>
            <Link to="/coders">Coders</Link>  
            <Link to="/frontend">Frontend</Link>
            <Link to="/backend">Backend</Link>
            <Link to="/javascript">JavaScript</Link>
          </li>
        </ul>
      </div>
    </div>
</nav>
  </Styles>

    )
  };
  
  return (
    <header>
      {WebsiteHeader()}
    </header>
  );
}