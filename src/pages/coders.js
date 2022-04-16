import React from 'react';
import Paul from '../assets/Coders/Paul.jpg';
import Alan from '../assets/Coders/Alan.jpg';
import Stephen from '../assets/Coders/Stephen.jpg';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import { Link } from "react-router-dom"; // reactrouter v6

export default function Coders() {
return (
	<div>

<main class="row">
    <div>
      <h1 class="text-3xl font-bold">Coders</h1>

      <hr></hr>
      <h3 class="text-xl font-bold underline">Paul McQuade</h3>
      <figure class="md:flex rounded-xl md:p-8 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Paul} alt="Web developer" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium ml-2">
              Started of as a student in Institute of Technology Tallaght in 2006.
              Got my Higher Cert in Engineering in 2008. Joined coder-forge meetup
              in January of 2019. Active user on Github - Has over 144 repositories and loves open source. Loves web
              development languages like HTML5, CSS3 and Javascript. Check out my 
              <a class="text-sky-500 dark:text-sky-400"
                href="https://github.com/paulmcquad/CV"
              > CV</a> for more
              information. Coding is my hooby but I think I would like to get a
              job in 2022.
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                Paul McQuade
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                Web Developer, Dublin Ireland - CoderForge Organizer and Author of this website
            </div>
            <div>
            Github : 
            <a class="text-sky-500 dark:text-sky-400" href="https://www.github.com/paulmcquad/"
              > www.github.com/paulmcquad</a>
            </div>
            </figcaption>
        </div>
        </figure>


      <hr></hr>
      <h3 class="text-xl font-bold underline">Alan Dodd</h3>

      <figure class="md:flex rounded-xl md:p-8 dark:bg-slate-800">
        <img class="w-48 h-48 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Alan} alt="head coderforger" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
            Hobbyist coder who runs a number of affiliate websites including
            cheaptextbooks dot com and allhotels dot com. Rudimentary basic
            knowledge of HTML, CSS and PHP. Here to learn!
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Alan Dodd
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                Web Developer, Dublin Ireland - CoderForge Member and CoderForge Website Hoster
            </div>
            </figcaption>
        </div>
        </figure>

      <hr></hr>

      <h3 class="text-xl font-bold underline">Daithi Coombes</h3>

      <figure class="md:flex rounded-xl md:p-8 dark:bg-slate-800">
        <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
            Founder of Coder Forge. He has 12 years experience as a digital
            nomad and 6 years working in house. Starting as a full stack
            engineer he has moved to Distributed Ledger Technologies. Currently
            he is a Smart Contract Advisor for Gaimin and also working full time
            as a Blockchain Engineer with Blockdaemon.
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Daithi Coombes
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                Web Developer, Dublin Ireland - CoderForge Founder
            </div>
            </figcaption>
        </div>
        </figure>

        <hr></hr>

        <h3 class="text-xl font-bold underline">Stephen Mc Govern</h3>

        <figure class="md:flex rounded-xl md:p-8 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Stephen} alt="Web developer" width="384" height="512"/>
          <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
              <blockquote>
              <p class="text-lg font-medium">
              Stephen is a junior full stack developer and graduate of Code Institute which is Europe's only
              university accredited Bootcamp. You can check his portfolio page to find out more about him
              and view his projects and his GitHub. 
              </p>
              </blockquote>
              <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                  Stephen Mc Govern
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                  Junior Full Stack Developer - Ireland
              </div>
              <div>
              Github : 
              <a class="text-sky-500 dark:text-sky-400" href="https://github.com/smcgdub/"
                > https://github.com/smcgdub</a>
              </div>
              <div>
                Portfolio: 
                <a class="text-sky-500 dark:text-sky-400" href="https://stephens-portfolio.com/"
              > https://stephens-portfolio.com/</a>
              </div>
              </figcaption>
          </div>
          </figure>


      </div>
    </main>
	</div>
);
};