<template>
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
</template>

<script>
export default {
  components: {},

  props: {},

  data: () => ({
    mains: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-account", text: "Coders", route: "/coders" }
    ],

    resources: [
      { icon: "mdi-book", text: "FrontEnd Developer", route: "/frontend" },
      { icon: "mdi-book", text: "BackEnd Developer", route: "/backend" }
    ]
  })
};
</script>
