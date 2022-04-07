import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default function Footer() {
    return (

<footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                  <span class="text-light bg-dark">
                    Paul McQuade
                    <span class="copyleft">&copy;</span>
                    - GNU General Public License v3 -
                    <a href="https://github.com/paulmcquad/coder-forge" class="text-light bg-dark">
                      https://github.com/paulmcquad/coder-forge</a>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>

    );
}
