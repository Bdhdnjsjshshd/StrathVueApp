import { createRouter,createWebHistory } from "vue-router";

import homepage from "../components/homepage.vue"
import events from "./../components/events.vue"
import contactus from "../components/contactus.vue"
import alumni from "../components/alumni.vue"
import coursesoffered from "../components/coursesoffered.vue"
import library from "../components/library.vue"
import aboutus from "../components/aboutus.vue"

const routes = [
    {
        path: '/',
        name: 'homepage',
        components: homepage,
    },

    {
        path: '/events',
        name: 'events',
        components: events,
    },
    {
        path: '/contactus',
        name: 'contactus',
        components: contactus,
    },
    {
        path: '/alumni',
        name: 'alumni',
        components: alumni,
    },
    {
        path: '/coursesoffered',
        name: 'coursesoffered',
        components: coursesoffered,
    },
    {
        path: '/library',
        name: 'library',
        components: library,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        components: aboutus,
    }
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router