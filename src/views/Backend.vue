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
