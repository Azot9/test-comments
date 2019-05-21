<template>
    <header>
        <router-link to="/">
          <img class="logo" src="../../static/images/logo.png" alt="logo">
        </router-link>
        <img class="hamburger" src="../../static/images/hamburger.png" alt="logo">
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
      ]
    }
  }
};
</script>


<style scoped>

header {
  width: 93%;
  margin: 50px auto 0;
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
}

</style>
