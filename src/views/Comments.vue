<template>
  <div class="home">
    <h1>Comments</h1>
    <div class="comments" ref="grid">
      <comment 
      v-for="comment in Comments" 
      :key="comment.id"
      :comment="comment">
      </comment>
    </div>
    <pre-footer/>
  </div>
</template>

<script>
import Masonry from 'masonry-layout';
import store from "../store";
import Comment from "@/components/Comment";
import PreFooter from "@/components/PreFooter";

export default {
  name: "Comments",
  components: {
    Comment,
    PreFooter
  },
  computed: {
    Comments() {
      if (store.state.comments === null) {
          store.dispatch("getComments");
      }
      return store.state.comments;
    }
  },
  mounted() {
			const grid = this.$refs.grid;
			this.msnry = new Masonry(grid, {
				itemSelector: '.comment'
      });
      this.msnry.reloadItems();
			this.msnry.layout();
		},
		updated() {
			this.msnry.reloadItems();
			this.msnry.layout();
		},
}
</script>

<style scoped>
.home {
  width: 74%;
  margin: auto;
}
h1 {
  margin-top: 84px;
  font-size: 4.375rem;
  line-height: 72px;
  color: #111518;
  font-family: "Sofia Pro";
  font-weight: bold;
}

@media (max-width: 800px) {
  h1 {
    font-size: 42px;
    padding-top: 100px; 
    margin-left: 7.5%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>

