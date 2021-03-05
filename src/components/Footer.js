import React from "react";
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components'; const Styles = styled.div`
.copyleft {
    position: relative;
    top: 4px;
    display:inline-block;
    transform: rotate(180deg);
}

`;

export default function Footer() {

const WebsiteFooter = () => {
    return (
    <Styles>
        <Navbar bg="dark" variant="dark">
            
            <span class="text-light bg-dark">
            Paul McQuade
            <span class="copyleft">&copy;</span>
            - GNU General Public License v3 - 
            <a href="https://github.com/paulmcquad/coder-forge" class="text-light bg-dark"> https://github.com/paulmcquad/coder-forge</a>
            </span>
        </Navbar>
    </Styles>

    )
  };
  
  return (
    <header>
      {WebsiteFooter()}
    </header>
  );
}