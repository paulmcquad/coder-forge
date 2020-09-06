<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list>
          <v-list-item v-for="main in mains" :key="main.text" router :to="main.route">
            <v-list-item-action>
              <v-icon>{{ main.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ main.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group prepend-icon="mdi-book" value="true">
            <template v-slot:activator>
              <v-list-item-title>Resources</v-list-item-title>
            </template>

            <v-list-group no-action sub-group value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Full Stack Developer</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="resource in resources"
                :key="resource.text"
                router
                :to="resource.route"
              >
                <v-icon>{{ resource.icon }}</v-icon>
                <v-list-item-icon>
                  <v-list-item-title>{{ resource.text }}</v-list-item-title>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#faac33" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../assets/icon.png" height="64" width="64" />
      <v-toolbar-title>Coder Forge</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <article>
        <h2>Covid-19 Situation - ONLINE Meetup only</h2>
        <h3>Every Tuesday 7pm - 9pm on Zoom.</h3>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
              Due to the Covid-19 situation, we are unable to meet in our usual
              venue in Temple Bar for the moment. However, we are continuing the
              meetings every Tuesday 7pm - 9pm on Zoom. Anyone is welcome to
              join the meeting who want to learn some coding. To join, you need
              to become a member of our
              <a
                href="https://chat.whatsapp.com/HRbfQ8Mnx7VLIXzjuuh6ZH"
                id="whatsapp"
              >WhatsApp</a>. At
              the moment, we are doing API usage based on the Twilio app, where
              we are using Postman to manage the web APIs. It's a fun API where
              you can learn how to send text messages from your terminal or
              website to anyone using the Twilio API. It's no problem if you
              missed a few sessions as the group is very informal and you can
              easily catch up.
            </p>
          </div>
        </section>

        <h2>Introduction:</h2>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
              Coder Forge is a coding meetup to Learn to code for free every
              Tuesday in Temple Bar, Dublin. It's for people who want to learn
              how to code from people who know how to code!
            </p>
          </div>
        </section>

        <!-- <h3>Where Do We Meet?</h3> -->

        <!-- <section class="block-paragraph"> -->
        <!-- <div class="rich-text"> -->
        <!-- <p> -->
        <!-- We meet every Tuesdays from (19h to 21h) or (7pm - 9pm) at the Brick Alley Cafe, 25 Essex St E, Temple Bar, Dublin, D02 W560!  -->
        <!-- </p> -->
        <!-- <iframe -->
        <!-- src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.880054839293!2d-6.266677584269861!3d53.34540327997877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670fe44ae2b6e9%3A0xd679b49e440fc45d!2sBrick+Alley+Cafe!5e0!3m2!1sen!2sie!4v1565120761707!5m2!1sen!2sie" -->
        <!-- width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> -->
        <!-- </div> -->
        <!-- </section> -->

        <h3>How Is It Done?</h3>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
              Coder Forge adapts programming learning to your interest. Want to
              know how to create websites using HTML and CSS, while adding some
              interactivity with Javascript? Heard about Java and want to know
              what it is about? A friend said that python is a beginner-friendly
              programming language and want to give it a try? Maybe a project is
              ideal for you, or maybe you might prefer an indication for a good
              book or video lessons on the subject. With Coder Forge our members
              share their skills and programming know how to make you learn how
              to code in a way that works for you.
            </p>
          </div>
        </section>

        <h3>What we do.</h3>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
              Knowing how to code is an extremely useful skill in the technology
              driven world that we live today. Learning how to code, on the
              other hand, can be a very intimidating challenge.
            </p>
            <p>
              With that in mind, the Coder Forge borrows the idea of the "Coder
              Dojo" and applies it to adults. The objective is to create a
              environment where experienced software developers teach people who
              are interested in learning how to code!
            </p>
          </div>
        </section>

        <h3>Want To Know More About Us?</h3>

        <a href="https://www.meetup.com/Dublin-Coder-Forge/">
          <img src="../assets/meetupicon.png" id="forgeLogo" height="64" width="64" />
        </a>

        <a href="https://www.facebook.com/coderforge">
          <img src="../assets/fbicon.png" id="forgeLogo" height="64" width="64" />
        </a>
        <a
          href="https://join.slack.com/t/coderforgeworkspace/shared_invite/enQtODE3NTY5NTUxMTkxLWY2NmJkODYxYWMxMTFhYmUyMmQ3ZDhiODE3ZWNmMzU5MDUxMzM4OGRlZThkM2U0Zjc5NDcyYzU2NDVhNTNmNzQ"
        >
          <img src="../assets/slack.png" id="forgeLogo" height="64" width="64" />
        </a>
        <a href="https://chat.whatsapp.com/HRbfQ8Mnx7VLIXzjuuh6ZH">
          <img src="../assets/whatsapp.png" id="forgeLogo" height="64" width="64" />
        </a>
      </article>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
    Footer
  },

  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    mains: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-account", text: "Coders", route: "/coders" }
    ],

    resources: [
      { icon: "mdi-book", text: "FrontEnd Developer", route: "/front" },
      { icon: "mdi-book", text: "BackEnd Developer", route: "/backend" }
    ]
  })
};
</script>
