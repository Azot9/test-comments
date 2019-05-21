<template>
  <div class="write-comment">
      <div class="title">
            <h2>Write comment</h2>
            <div class="yellow-block"></div>
      </div>
      <form >
          <input 
          @input="inputTitle"
          v-model="title" 
          class="input-info" 
          type="text" 
          placeholder="Title"
          :class="{ 'wrong-field': isTitleWrong }">
          <p  :class="{'require-field': isTitleWrong}">This field is required</p>
          <textarea 
          @input="inputComment"
          v-model="comment" 
          class="input-info" 
          cols="30" 
          rows="10" 
          placeholder="Your comment"
          v-bind:class="{ 'wrong-field': isCommentWrong }"></textarea>
          <p  :class="{'require-field': isCommentWrong}">This field is required</p>
          <button class="send" @click.prevent="addComment">Send</button>
      </form>
    <div class="line-bg">
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
    name: "WriteComment",
    data() {
        return {
            title: "",
            comment: "",
            isTitleWrong: false,
            isCommentWrong: false
        }
    },
    methods: {
        addComment() {
            if (this.title.replace(/\s+/g, '').length === 0 || this.comment.replace(/\s+/g, '').length === 0) {
                alert("Fill in all fields");
            } else {
                this.isCommentWrong = false;
                this.isTitleWrong = false;
                let date = new Date();
                store.dispatch("addComment", {
                    created_at: +date,
                    title: this.title,
                    body: this.comment,
                });
                this.title = "";
                this.comment = "";
                alert("Thank you for your comment!");
            }
        },
        inputTitle() {
            if (this.title.replace(/\s+/g, '').length === 0) {
                this.isTitleWrong = true;
            } else {
                this.isTitleWrong = false;
            }
        },
        inputComment() {
            if (this.comment.replace(/\s+/g, '').length === 0) {
                this.isCommentWrong = true;
            } else {
                this.isCommentWrong = false;
            }
        }
    }
}
</script>


<style scoped>
.write-comment{
    background-color: #1d1e25;
    box-sizing: border-box;
    float: left;
    width: 100%;
}
.title {
    padding-left: 180px;
    float: left;
    box-sizing: border-box;
    width: 30%;
    margin: 0;
    padding-top: 140px;
}
h2 {
    margin: 0;
    font-size: 3.4375rem;
    line-height: 50px;
    color: #ffffff;
    font-family: "Sofia Pro";
    font-weight: bold;
}
.yellow-block {
    margin-top: 40px;
    float: left;
    width: 70px;
    height: 5px;
    background-color: #f9d10d;
}
form {
    display: block;
    box-sizing: border-box;
    width: 60%;
    margin-left: 10%;
    float: left;
}
.wrong-field {
    outline: 1px solid red !important;
    border: none;
}
p {
    visibility: hidden;
    margin: 3px;
    color: red;
    font-size: 12px;
}
input:focus, textarea:focus {
    outline: none;
}
::placeholder {
    color: #60e3a1;
}
textarea {
    resize: none;
    height: 150px; 
    margin-top: 15px;
}
input{
    margin-top: 140px;
    height: 55px;
}
.input-info {
    display: block;
    box-sizing: border-box;
    background-color: #1d1e25;
    width: 75%;
    border-radius: 3px;
    border: 1px solid #60e3a1;
    color: #60e3a1;
    font-size: 1rem;
    line-height: 31px;
    font-family: "Sofia Pro";
    padding: 18px;
}
.require-field {
    visibility: visible;
}
.send {
    width: 150px;
    height: 55px;
    border-radius: 3px;
    margin: 15px 0 250px;
    background-color: #60e3a1;
    font-size: 16px;
    color: #1d1e25;
    font-family: "Sofia Pro";
}
.line-bg{
  display: block;
  float: left;
  height: 2px;
  margin: 0px 3.660322%;
  border: 0;
  height: 2px;
  background-color: #2b2c36;
  width: 92.679356%;
}
@media (max-width: 1220px) {
    form {
        width: 50%;
        margin-left: 20%;
    }
}
@media (max-width: 1000px) {
    .title {
        width: 100%;
        padding: 120px 15% 40px;
    }
    .yellow-block {
        display: none;
    }
    form {
        width: 100%;
        margin: 0px;
    }
    .input-info {
        margin: 15px auto 25px;
        width: 70%;
    }
    .send {
        margin-left: 15%;
        margin-bottom: 150px;
    }
}
@media (max-width: 600px) {
    h2 {
        font-size: 3rem;
    }
}
</style>
