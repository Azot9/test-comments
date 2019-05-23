<template>
    <header>
        <router-link to="/">
          <img class="logo" src="../../static/images/logo.png" alt="logo">
        </router-link>
        <img class="hamburger"
         @click="showMenu" 
         src="../../static/images/hamburger.png" 
         alt="logo">
        <div 
        class="adaptive-menu" 
        :class="{'menu-visibility': isMenuVisible}"
         >
          <div class="hide-menu" @click="showMenu">Hide menu <span>&#129122</span></div>
          <router-link 
          v-for="link in navigations" 
          :to="link.link"
          :key="link.link" 
          exact class="link"
          tag="div">{{link.text}}</router-link>
        </div>
            <ul>
                <router-link v-for="link in navigations" :key="link.link" tag="li" :to="link.link" exact>
                  <hr>
                {{link.text}}
                </router-link>
            </ul>
    </header>
</template>

<script>
export default {
  name: "AppNavigator",
  data(){
    return {
      navigations: [
      {text: "ABOUT US", link: "/"},
      {text: "WRITE COMMENT", link: "/comment"},
      {text: "COMMENTS", link: "/comments"}
      ],
      isMenuVisible: false //for adaptive menu
    }
  },
  methods: {
    showMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
};
</script>


<style scoped>
@keyframes right-menu {
  from {
      right: -30%;
      animation-timing-function: ease-out;
    }

    50% {
      right: -15%;
      animation-timing-function: ease-out;
    }
    75% {
      right: -5%;
      animation-timing-function: ease-in;
    }
    to {
      right: 0%;
    }
}

header {
  width: 93%;
  margin: 50px auto 0;
}
span {
  color: #60e3a1;
}
.logo {
 position: absolute;
}
.hamburger {
  display: none;
}
ul {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 66px;
   list-style: none;
}
.adaptive-menu{
 display: none;
}
.router-link-active hr{
  background-color: #f9d10d;
  visibility: visible;
}
li {
 margin: 0 15px;
 font-size: .875rem;
 letter-spacing: 1px;
 line-height: 48px;
 font-family: "Sofia Pro";
 font-weight: 900;
 cursor: pointer;
}
hr {
  margin: 0;
  border: none;
  height: 2px;
  background-color: #f9d10d;
  visibility: hidden;
}
a {
  text-decoration: none;
  color: #111518;
}
@media (max-width: 800px) {
  header {
      margin-top: 30px;
  }
  ul {
    display: none;
  }
  .hamburger {
  height: 66px;
  display: block;
  float: right;
  }
  .adaptive-menu{
  padding-top: 40px;
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 30%;
  background-color: white;
  box-shadow: 6.5px 11.258px 30px rgba(17,21,24,0.04);
  z-index: 1;
  transform: translateX(100%);
  transition: all .5s;
  display: block;
}
.menu-visibility{
    transform: translateX(0%);
}
.hide-menu, .link {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0 30px 20px; 
  border-bottom: 1px solid #60e3a1;
  cursor: pointer;
}
.hide-menu:hover, .link:hover{
  background-color: rgb(228, 240, 233);
}
}
@media (max-width: 650px) {
  .adaptive-menu{
  width: 50%;
  }
}

</style>
