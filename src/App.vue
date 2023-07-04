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
  // async created() {
  //   const store = useStore();
  //    store.dispatch('getSearchResultInAction', 'gasdasdasame')
  //    // Response -> false
  //    store.dispatch('getSearchResultInAction', 'game')
  //    // Response -> true
  //    // search -> [...]
  // },
  components: {
    Navbar
  }
})
</script>