<template>
    <div class="footer">
        <div class="left-info">
            <p>mail@mailtest.com</p>
            +30-6977664062   
        </div>
        <div class="copyright">Copyright © 2019 Test All Rights Reserved.</div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",  
}
</script>


<style scoped>
.footer {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #1d1e25;
}
.left-info {
    font-size: 1rem;
    color: #ffffff;
    font-family: "Sofia Pro";
}
p {
    margin: 5px 0;
}
.copyright{
font-size: 0.8125rem;
color: #4a4d5e;
font-family: "Alright Sans";
font-weight: 500;
}
.footer div {
    margin: 0 3.660322%;

}
</style>
