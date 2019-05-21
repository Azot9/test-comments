<template>
  <div class="about">
    <router-link to="/comments">
    <p class="back-to-comments">
      <span class="back-arrow">&#129120 </span>
      <span class="back-text">Back to Comments</span> 
      </p>
    </router-link>
    <h1>{{Comment.title}}</h1>
    <p class="body">{{Comment.body}}</p>
    <hr>
    <pre-footer></pre-footer>
  </div>
</template>

<script>
import PreFooter from "@/components/PreFooter";
import store from "../store";

export default {
    name: "OneComment",
    components: {
      PreFooter
    },
    computed: {
      Comment () {
        try {
          return store.state.comments.filter(comment => comment.id === this.$route.params.id)[0];
        } catch (e) {
          console.log(e);
          store.dispatch("getComments");
        }
      }
    }
}
</script>

<style scoped>
.about{
  width: 70%;
  margin: 80px auto;
  color: #101417;
}
h1 {
  font-size: 3rem;
  font-family: "Sofia Pro";
  font-weight: bold;
}
.body {
  font-size: 1rem;
  line-height: 28px;
  font-family: "Sofia Pro";
}
hr {
  margin: 0 auto;
  border: 0;
  height: 2px;
  background-color: #ededef;
}
.back-to-comments{
  font-family: "Sofia Pro";
  cursor: pointer;
}
.back-arrow {
  color: #60e3a1;
  text-decoration: none;
}
.back-text {
  text-decoration: underline;
  font-size: 1rem;
  line-height: 53px;
  color: #1d1e25;
}
@media (max-width: 800px) {
  .about{
    margin: 135px auto;
  }
}
</style>
