<template>
  <Navbar />
  <router-view />
</template>


<script lang="ts">
import { computed, defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import './main.css'
import { payloadTypeInSearchByTitle } from "./types/types";
import Navbar from "./components/Navbar/Navbar.vue";

export default defineComponent({
  setup(){
    // if search in localStrage has value -> fetch the result of its value
    const { state, dispatch } = useStore();
    const getlastSearch = localStorage.getItem('search')? JSON.parse(localStorage.getItem('search') || ""): ''
    const searchResult = computed((): payloadTypeInSearchByTitle => state.resultByTitle );
    onBeforeMount(() => {
      if ( getlastSearch !== '' && searchResult.value.result.length === 0 ) {
        dispatch('fetchResultByTitle', {
          title: getlastSearch,
          page_number: 1
        })
      }
    })
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