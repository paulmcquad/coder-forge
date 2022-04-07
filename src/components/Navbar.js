import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default function Navbar() {
    return (

<header>
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
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Developer Setup
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="/os.html">Operating Systems</a></li>
                              <li><a class="dropdown-item" href="/editors.html">Code Editors</a></li>
                              <li><a class="dropdown-item" href="/vcs.html">Version Control Software</a></li>
                              <li><a class="dropdown-item" href="/hosting.html">Code Hosting</a></li>
                            </ul>
                          </li>

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Coding
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="https://missing.csail.mit.edu/">Missing Semester</a></li>
                              <li><hr class="dropdown-divider"></hr></li>
                              <li><a class="dropdown-item" href="/web.html">Web</a></li>
                              <li><a class="dropdown-item" href="/scripting.html">Scripting</a></li>
                              <li><a class="dropdown-item" href="/backend.html">Backend</a></li>
                              <li><a class="dropdown-item" href="/database.html">Database</a></li>
                              <li><a class="dropdown-item" href="/kernel.html">Kernel</a></li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Frameworks
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="/css_fw.html">CSS</a></li>
                              <li><a class="dropdown-item" href="/javascript_fw.html">JavaScript</a></li>
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

    );

}
