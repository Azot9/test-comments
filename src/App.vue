<template>
  <div id="app">
    <div class="wrapper">
    <app-navigator/>
      <transition name="page" mode="out-in" appear>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      </div>
    <footer-component/>
  </div>
</template>

<script>
import AppNavigator from "@/components/AppNavigator.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    AppNavigator,
    FooterComponent
  }
}
</script>


<style >
@font-face {
font-family: "Sofia Pro";
src: url("../static/fonts/sofiapro-light.otf");
}
@font-face {
font-family: "Open Sans";
src: url("../static/fonts/open-sans.ttf");
}
body,html {
  height: 100%;
  margin: 0;
  font-size: 16px;
}
.wrapper {
  flex: 1 0 auto;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to  {
  opacity: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 600px) {
    body,html {
      font-size: 14px;
  }
}
</style>
