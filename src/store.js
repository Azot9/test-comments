import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: null
    },
    mutations: {
        download(state, payload) {
            state.comments = payload;
        }
    },
    actions: {
        getComments({ commit }) {
            new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", "https://5cbef81d06a6810014c66193.mockapi.io/api/comments");
                xhr.send();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                };
            })
                .then(json => {
                    commit("download", JSON.parse(json));
                })
                .catch(status => {
                    console.log("error: " + status);
                });
        },
        addComment({ commit }, comment) {
            new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("POST", "https://5cbef81d06a6810014c66193.mockapi.io/api/comments");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(comment));
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                };
            })
                .then(json => {
                    commit("download", JSON.parse(json));
                    console.log("response: " + json);
                })
                .catch(status => {
                    console.log("error: " + status);
                });
        }
    }
});
