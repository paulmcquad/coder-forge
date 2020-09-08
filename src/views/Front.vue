<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Header />
    </v-navigation-drawer>

    <v-app-bar app color="#faac33" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../assets/icon.png" height="64" width="64" />

      <v-toolbar-title>Coder Forge</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="container">
        <div class="row well">
          <div class="col-md-8">
            <div class="row">
              <article>
                <!-- <section id="resources"> -->

                <h2>Resources:</h2>

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
                      class="list-group-item"
                    >W3Schools Tutorial on HTML</a>
                    <br />
                    <a
                      href="https://www.w3schools.com/css/default.asp"
                      target="_blank"
                      class="list-group-item"
                    >W3Schools Tutorial on CSS</a>
                    <br />

                    <a
                      href="https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
                      target="_blank"
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
                      class="list-group-item"
                    >W3Schools Tutorial on JavaScript</a>
                    <br />

                    <a
                      href="https://javascript.info/"
                      target="_blank"
                      class="list-group-item"
                    >Javascript.info Tutorial</a>
                    <br />

                    <a
                      href="https://www.javatpoint.com/javascript-tutorial"
                      target="_blank"
                      class="list-group-item"
                    >Javatpoint Tutorial on JavaScript</a>
                  </div>
                </div>

                <h3>Python</h3>

                <div class="rich-text">
                  <p>
                    Python is a general purpose, object-oriented programming
                    language. It has many uses, such as scripting, development
                    of web applications, machine learning and security. Many
                    people pick up Python as their first language because of its
                    easy to learn syntax.
                  </p>

                  <div class="list-group">
                    <a
                      href="https://docs.python.org/3/tutorial/index.html"
                      target="_blank"
                      class="list-group-item"
                    >Oficial Python.org Tutorial</a>
                    <br />

                    <a
                      href="https://www.sololearn.com/"
                      target="_blank"
                      class="list-group-item"
                    >SoloLearn Website</a>
                    <br />

                    <a
                      href="https://pythoninstitute.org/free-python-courses/?gclid=Cj0KCQjwkK_qBRD8ARIsAOteukBnZCea00nmlkyCA7oeF8kHFgmzVj1yYuRC6imRr2Pa7hMGMVB9WhEaAkkDEALw_wcB"
                      target="_blank"
                      class="list-group-item"
                    >Python Institute Tutorial</a>
                  </div>
                </div>

                <h3>Java</h3>

                <div class="rich-text">
                  <p>
                    Java is a general purpose, object-oriented programming
                    language. It has a
                    <i>write once, run anywhere</i> approach,
                    where the code writen in one environment will run in any
                    other provided it has a Java Virtual Machine. Java is
                    heavily used in client-server communication and it's also
                    used for the development of Android application.
                  </p>

                  <div class="list-group">
                    <a
                      href="https://docs.oracle.com/javase/tutorial/java/index.html"
                      target="_blank"
                      class="list-group-item"
                    >Oracle's oficial Java Tutorial</a>
                    <br />

                    <a
                      href="https://hi.hyperskill.org/projects3"
                      target="_blank"
                      class="list-group-item"
                    >JetBrains Academy Course</a>
                    <br />

                    <a
                      href="https://beginnersbook.com/java-tutorial-for-beginners-with-examples/"
                      target="_blank"
                      class="list-group-item"
                    >BeginnersBook Java Tutorial</a>
                  </div>
                </div>

                <h3>C++</h3>

                <div class="rich-text">
                  <p>
                    C++ is a general-purpose programming language created by
                    Bjarne Stroustrup as an extension of the C programming
                    language, or "C with Classes". The language has expanded
                    significantly over time, and modern C++ has object-oriented,
                    generic, functional features in addition to facilities for
                    low-level memory manipulation.
                  </p>

                  <div class="list-group">
                    <a
                      href="https://www.geeksforgeeks.org/cpp-tutorial/"
                      target="_blank"
                      class="list-group-item"
                    >Geeksforgeeks C++ Tutorial</a>
                    <br />

                    <a
                      href="https://www.tutorialspoint.com/cplusplus/index.htm"
                      target="_blank"
                      class="list-group-item"
                    >Tutorialspoint C++ Tutorial</a>
                    <br />

                    <a
                      href="https://beginnersbook.com/2017/08/c-plus-plus-tutorial-for-beginners/"
                      target="_blank"
                      class="list-group-item"
                    >BeginnersBook C++ Tutorial</a>
                  </div>
                </div>
                <!-- </section> -->
              </article>
            </div>
          </div>
        </div>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  },

  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>
