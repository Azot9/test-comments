<template>
    <div>
        <p>Lorem Ipsum is text of the typesetting industry</p>
        <div class="btn">
            <router-link to="/">
                <button class="back-to-home"><span>&#129120</span> Back to homepage</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreFooter"
    
}
</script>


<style scoped>
p {
  clear: left;
  padding: 70px 0 30px;
  text-align: center;
  font-size: 1.5rem;
  color: #888a8b;
  font-family: "Sofia Pro";
  font-weight: bold;
}
.back-to-home{
  display: block;
  margin: 0 auto 100px;
  width: 212px;
  height: 55px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid #60e3a1;
  font-size: 1rem;
  color: #1d1e25;
  font-family: "Sofia Pro";
}
span {
  color: #60e3a1;
}
</style>
