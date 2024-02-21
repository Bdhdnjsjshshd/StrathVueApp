<script setup>
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'
</script>

<template>
  <v-app>
  <navbar/>

      <v-main>
        <router-view></router-view>
      </v-main>
    <footer/>  
  </v-app>
</template>
