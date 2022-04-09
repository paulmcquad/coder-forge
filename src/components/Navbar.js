import * as React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import logo from '../assets/logo.png';


export default function Navbar() {
    return (

<div>
      <nav class="text-light bg-dark"
        style={{
          borderBottom: "solid 2px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "black", 
        }}
      >

        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                      <a class="container-fluid navbar-brand text-light bg-dark" href="/">CoderForge</a>

  <div>
          <Link class="text-white" to="/">Home</Link> |{" "}
          <Link class="text-white" to="/coders">Coders</Link> |{" "}
          <Link class="text-white" to="/os">OS</Link> |{" "}
          <Link class="text-white" to="/editors">Editors</Link> |{" "}
          <Link class="text-white" to="/vcs">VCS</Link> |{" "}
          <Link class="text-white" to="/hosting">Hosting</Link> |{" "}
          <Link class="text-white" to="/web">Web</Link> |{" "}
          <Link class="text-white" to="/scripting">Scripting</Link> |{" "}
          <Link class="text-white" to="/backend">Backend</Link> |{" "}
          <Link class="text-white" to="/database">Database</Link> |{" "}
          <Link class="text-white" to="/kernel">Kernel</Link> |{" "}
          <Link class="text-white" to="/cssfw">CSS Frameworks</Link> |{" "}
          <Link class="text-white" to="/javascriptfw">Javascript Frameworks</Link> |{" "}
  </div>

      </nav>
    </div>

/* <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                      <img src="https://coderforge.io/assets/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                      <a class="navbar-brand" href="/">CoderForge</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/coders">Coders</a>
                          </li>
                       <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Developer Setup
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="/os">Operating Systems</a></li>
                              <li><a class="dropdown-item" href="/editors">Code Editors</a></li>
                              <li><a class="dropdown-item" href="/vcs">Version Control Software</a></li>
                              <li><a class="dropdown-item" href="/hosting">Code Hosting</a></li>
                            </ul>
                          </li>

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Coding
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="https://missing.csail.mit.edu/">Missing Semester</a></li>
                              <li><hr class="dropdown-divider"></hr></li>
                              <li><a class="dropdown-item" href="/web">Web</a></li>
                              <li><a class="dropdown-item" href="/scripting">Scripting</a></li>
                              <li><a class="dropdown-item" href="/backend">Backend</a></li>
                              <li><a class="dropdown-item" href="/database">Database</a></li>
                              <li><a class="dropdown-item" href="/kernel">Kernel</a></li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Frameworks
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="/cssfw">CSS</a></li>
                              <li><a class="dropdown-item" href="/javascriptfw">JavaScript</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
        </div>
    </header>
 */
    );

}
