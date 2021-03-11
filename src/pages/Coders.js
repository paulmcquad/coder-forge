import paul from "../assets/Coders/Paul.jpg";
import alan from "../assets/Coders/Alan.jpg";
import caue from "../assets/Coders/Caue.jpg";

import React from 'react';
import styled from 'styled-components'; const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 3em;
  margin-left: 5em;
  margin-right: 5em;
  grid-auto-rows: minmax(25px, auto);
`; export const Coders = () => (
  <GridWrapper>
      <h2>Coders:</h2>
          <h3>Paul McQuade</h3>
          <img src={paul} alt="main coder" //style="float: left; margin-right: 10px; margin-bottom: 5px;"
        />


          <p>The current organizer of coder forge and author of this website</p>
           
          <p>
            Started of as a student in Institute of Technology Tallaght in 2006.
            Got my Higher Cert in Engineering in 2008. Joined coder-forge meetup
            in January of 2019. Active user on Github:
            <a
              href="https://www.github.com/paulmcquad/"
            >www.github.com/paulmcquad</a>. Has over 65 repositories and loves open source. Loves web
            development languages like HTML5, CSS3 and Javascript. Check out my 
            <a
              href="https://github.com/paulmcquad/CV"
            > CV</a> for more
            information. Coding is my hooby but I think I would like to get a
            job in 2021.
          </p>
        
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h3>Alan Dodd</h3>
          <img
            src={alan}
            width="200"
            height="200"
            alt="head coderforger"
          />

          <p>
            Hobbyist coder who runs a number of affiliate websites including
            cheaptextbooks dot com and allhotels dot com. Rudimentary basic
            knowledge of HTML, CSS and PHP. Here to learn!
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h3>Daithi Coombes</h3>

          <p>
            Founder of Coder Forge. He has 12 years experience as a digital
            nomad and 6 years working in house. Starting as a full stack
            engineer he has moved to Distributed Ledger Technologies. Currently
            he is a Smart Contract Advisor for Gaimin and also working full time
            as a Blockchain Engineer with Blockdaemon.
          </p>


        <h3>Caue Duarte</h3>
          <img
            src={caue}
            width="200"
            height="200"
            alt="coderforger"
          />

          <p>
            3rd year student pursuing a Bsc in Information Technology. Started
            going to the Coder Forge to speak to people that work with tech to
            get ideas on things to learn in this last year in college. Has a
            general knowledge about programming and other IT fields, having Java
            as his strong suit and some web development knowledge (HTML, CSS,
            PHP). Here to learn and help other people when possible!
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />
        
         <h3>Agnieszka Kowalczyk (Agi)</h3>
          <p>
            Psychology PhD graduate with background in health/social care;
            asipring Data Scientist. Competent in using R-programing language
            (e.g., cleaning, preparing, analysing and visualising quantitative
            data). Joined the Code Forger to learn and practice programing
            languages (e.g., Python, Java).
          </p>

          <h3>Daniel Onyedikachi Oboko</h3>

          <p>
            MSc in Applied Digital Media with a background in Computer
            Networking Engineering; currently a Web Developer, managing an
            e-commerce website. Working with(PHP,Javascript,HTML/CSS). Digital
            Story Telling, Photographer, writer. working towards becoming a
            Software Developer. Joined the Coder Forger to learn and practice
            programing and all round Tech.
          </p>        

  </GridWrapper>
)
