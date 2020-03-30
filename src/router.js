import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp
    },
    {
        path: "/log-in",
        name: "LogIn",
        component: LogIn
    },

];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
});



export default router;