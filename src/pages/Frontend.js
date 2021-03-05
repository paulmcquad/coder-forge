
import React from 'react';
import styled from 'styled-components';const GridWrapper = styled.div``;


export const Frontend = (props) => (
    <GridWrapper>

                <h2>Frontend:</h2>

                <h3>HTML + CSS</h3>

                <div class="rich-text">
                  <p>
                    Both HTML and CSS are widely used by developers to make
                    websites! While HTML provides the structure, CSS adds the
                    styling to websites. Although not programming languages,
                    every developer benefits from knowing them!
                  </p>

                  <div class="list-group">
                    <a
                      href="https://www.w3schools.com/html/default.asp"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >W3Schools Tutorial on HTML</a>
                    <br />
                    <a
                      href="https://www.w3schools.com/css/default.asp"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >W3Schools Tutorial on CSS</a>
                    <br />

                    <a
                      href="https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >Codecademy Course on Web Development with HTML + CSS</a>
                  </div>
                </div>

                <h3>JavaScript</h3>

                <div class="rich-text">
                  <p>
                    JavaScript is a programming language that has many
                    applications, most commonly being used to add interactivity
                    and responsiveness to websites. A great programming language
                    to learn and build upon your HTML and CSS skills!
                  </p>

                  <div class="list-group">
                    <a
                      href="https://www.w3schools.com/js/default.asp"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >W3Schools Tutorial on JavaScript</a>
                    <br />

                    <a
                      href="https://javascript.info/"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >Javascript.info Tutorial</a>
                    <br />

                    <a
                      href="https://www.javatpoint.com/javascript-tutorial"
                    target="_blank"
                    rel="noreferrer"
                      class="list-group-item"
                    >Javatpoint Tutorial on JavaScript</a>
                  </div>
                </div>

    </GridWrapper>
)