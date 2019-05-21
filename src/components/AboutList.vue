<template>
    <div class="item">
        <img :src="require(`../../static/images/${item.image}`)" :alt="item.image">
        <h3>{{item.title}}</h3>
        <ul>
            <li v-for="features in item.list" :key="features[0].lehgth">
                {{features}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "AboutList",
  props: {
      item: Object
  },
  computed: {
      imageLink() {
          let image = new Image()
          image.src = `../../static/images/${this.item.image}`
          return image;
      }
  }
}
</script>


<style  scoped>
 .item {
    padding: 30px;
    font-family: "Sofia Pro";
 }
 h3 {
    font-size: 2.25rem;
    color: #101417;
    font-family: "Sofia Pro";
    font-weight: bold;
 }
 ul {
    list-style-position: inside;
    padding: 0;
 }
 li {
    font-size: 16px;
    color: #101417;
    font-family: "Sofia Pro";
    margin-bottom: 12px;
 }
 @media (max-width: 1220px) {
  h3 {
    font-size:  2rem;
  } 
}
@media (max-width: 1000px) {
  h3 {
    font-size:  1.875rem;
  } 
}
@media (max-width: 800px) {
  h3 {
    font-size:  1.5rem;
  } 
}
</style>