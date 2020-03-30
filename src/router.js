import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase"
Vue.use(VueRouter);



import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
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

// AUTH CHECK
router.beforeEach((to, from, next) => {
    // check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // check if NO logged in user
        if (!firebase.auth().currentUser) {
            // go log-in
            next({
                path: '/log-in',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // rroceed to route
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // check if NO logged user
        if (firebase.auth().currentUser) {
            // go home
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // proceed to route
            next();
        }
    } else {
        // proceed to route
        next();
    }
});


export default router;