<template>
  <v-app>
    <v-main> </v-main>
    <v-footer color="#faac33" app>
      <span class="white--text">
        Paul McQuade
        <span class="copyleft">&copy;</span>
        {{ new Date().getFullYear() }} - GNU General Public License v3 -
        <a href="https://github.com/paulmcquad/coder-forge" class="white--text"
          >https://github.com/paulmcquad/coder-forge</a
        >
      </span>
    </v-footer>
  </v-app>
</template>

<style>
.copyleft {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
