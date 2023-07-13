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
    if ( localStorage.getItem('search') === null ) {
      localStorage.setItem('search', JSON.stringify(''))
    }
  },
  components: {
    Navbar
  }
})
</script>