<template>
    <h1>Page not found (404)</h1>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style scoped>
h1 {
    margin-left: 40px;
    font-size: 4rem;
}
@media (max-width: 1220px) {
  h1 {
    font-size:  4rem;
  } 
}
@media (max-width: 1000px) {
  h1{
    font-size: 3rem;
  }
}
@media (max-width: 800px) {
  h1{
    font-size: 2rem;
    margin-top:150px;
  }
}
</style>

