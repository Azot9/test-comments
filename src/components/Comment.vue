<template>
  <div class="comment">
    <h3 class="title">{{comment.title}}</h3>
    <div class="text">
        {{comment.body}}
    </div>
    <router-link :to="`/comments/${comment.id}`" class="read-more" tag="button">Read more</router-link>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Comment",
  props: {
      comment: Object
  }
}
</script>

<style scoped>
.comment {
    box-sizing: border-box;
    padding: 30px 20px;
    margin: 15px 2.5%;
    width: 45%;
    font-family: "Open Sans";
    color: #333333;
    border-radius: 3px;
    box-shadow: 6.5px 11.258px 30px rgba(17,21,24,0.04);
}
h3 {
    font-size: 1.25rem;
    font-weight: 600;
}
.text {
    color: #888888;
}
.read-more {
    width: 150px;
    height: 55px;
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    background-color: #60e3a1;
    font-size: 1rem;
    color: #111518;
    font-family: "Sofia Pro";
    cursor: pointer;
}
.read-more:focus {
    outline: none;
}
@media (max-width: 800px) {
.comment {
    margin: 15px 7.5%;
    width: 85%;
}
}
</style>