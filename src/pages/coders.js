import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import { Link } from "react-router-dom"; // reactrouter v6

const Coders = () => {
return (
	<div
/* 	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}} */
	>


<main class="row">
    <div>
              <h2>Coders:</h2>

              <hr></hr>
              <h3>Paul McQuade</h3>
              <img src="https://coderforge.io/assets/Coders/Paul.jpg" alt="main coder"/>


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

              <br></br>
              <br></br>
              <br></br>
          
              <hr></hr>
              
              <h3>Alan Dodd</h3>
              <img
                src="../assets/Coders/Alan.jpg"
                width="200"
                height="200"
                alt="head coderforger"
              />

              <p>
                Hobbyist coder who runs a number of affiliate websites including
                cheaptextbooks dot com and allhotels dot com. Rudimentary basic
                knowledge of HTML, CSS and PHP. Here to learn!
              </p>

              <hr></hr>

              <h3>Daithi Coombes</h3>

              <p>
                Founder of Coder Forge. He has 12 years experience as a digital
                nomad and 6 years working in house. Starting as a full stack
                engineer he has moved to Distributed Ledger Technologies. Currently
                he is a Smart Contract Advisor for Gaimin and also working full time
                as a Blockchain Engineer with Blockdaemon.
              </p>

              <hr></hr>
              
      </div>
    </main>

	</div>
);
};

export default Coders;
