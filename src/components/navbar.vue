<script>
import homepage from "./homepage.vue"
import events from "./events.vue"
import contactus from "./contactus.vue"
import alumni from "./alumni.vue"
import coursesoffered from "./coursesoffered.vue"
import library from "./library.vue"
import aboutus from "./aboutus.vue"
</script>

<template>
    <v-app-bar color="red">
        <div>
            <v-btn to="/" color="white" dark>Home</v-btn>
        </div>
        <div>
            <v-btn to="/events" color="white" dark>events</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>ContactUs</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" color="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/coursesoffered" color="white" dark>coursesOffered</v-btn>
        </div>
        <div>
            <v-btn to="/library" color="white" dark>Library</v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>AboutUs</v-btn>
        </div>
    </v-app-bar>
</template>