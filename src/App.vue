<template>
  <Navbar />
  <router-view />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import './main.css'
import Navbar from "./components/Navbar/Navbar.vue";

export default defineComponent({
  setup(){
    
  },
  created(){
    if ( JSON.parse(localStorage.getItem('search') || "") && JSON.parse(localStorage.getItem('search') || "") === '' ) {
      localStorage.setItem('search', JSON.stringify(''))
    }
  },
  components: {
    Navbar
  }
})
</script>