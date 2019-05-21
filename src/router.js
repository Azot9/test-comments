import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Comments from "./views/Comments.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/comment",
            name: "comment",
            component: () => import("./views/CommentForWhat.vue")
        },
        {
            path: "/comments",
            name: "comments",
            component: Comments
        },
        {
            path: "/comments/:id",
            component: () => import("./views/OneComment.vue")
        },
        {
            path: "*",
            component: () => import("./views/NotFound.vue")
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
