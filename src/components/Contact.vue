<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#faac33" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Coder Forge</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        tempora sed aperiam nesciunt obcaecati. Tempore doloremque neque atque
        placeat quis itaque repudiandae quisquam minus. Id maxime blanditiis
        optio perferendis iure!
      </p>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-email", text: "Contact", route: "Contact" }
    ]
  })
};
</script>

<style>
.copyleft {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
