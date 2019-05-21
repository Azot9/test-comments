<template>
  <div class="about">
    <h1>Lorem Ipsum is simply dummy text of the printing and typesettin</h1>
    <img class="first-screen" src="../../static/images/Layer 131.png" alt="firs-screen">
    <div class="about-us-list">
      <about-list 
      class="about-us"
      v-for="item in about_list" 
      :item="item" 
      :key="item.id">
      </about-list >
    </div>
    <write-comment/>    
  </div>
</template>

<script>
import about_list from "../../static/about-list.json";
import AboutList from "@/components/AboutList.vue";
import WriteComment from "@/components/WriteComment.vue";
 
export default {
  name: "Home",
  components: {
    AboutList,
    WriteComment
  },
    data() {
      return {
          about_list
      }
  }
}
</script>

<style scoped>
.first-screen{
  position: relative;
  top: 10px;
  width: 100%;

}
h1 {
  height: 165px;
  font-size:  4.375rem;
  padding: 0 320px 60px 180px;
  line-height: 72px;
  color: #111518;
  font-family: "Sofia Pro";
  font-weight: bold;
}
.about-us-list{
  display: flex;
  justify-content: space-between;
  padding: 90px 180px 50px;
  background-color: #f7f7f7;
}

@media (max-width: 1220px) {
  h1 {
    font-size:  4rem;
    padding: 0 180px 60px 160px;
  } 
  .about-us-list{
    padding: 80px 120px 40px;
  }
}
@media (max-width: 1000px) {
  h1 {
    font-size:  2.75rem;
  }
  .about-us-list{
    padding: 70px 100px 40px;
  } 
}
@media (max-width: 800px) {
  h1 {
    height: 100px;
    font-size:  2rem;
    padding: 100px 90px 60px;
  }
  .about-us-list{
    padding: 60px 50px 40px;
    flex-direction: column;
  } 
}
@media (max-width: 670px) {
  h1 {
      line-height: 3.5rem;
      padding: 100px 70px 60px;
  }
}
</style>
