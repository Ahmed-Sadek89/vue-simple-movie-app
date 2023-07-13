<template>
    <div>
        <HomeBackground />
        <div class="container">
            <HomeSearchInput 
                :searchInput="searchInput"
                @setSearchInput="setSearchInput"
                @handleSubmit="handleSubmit"
            />
            <div class="home-search-results" v-if="searchResult.result.length !== 0" >
                <template v-for="(index) in searchResult.result" :key="index.imdbID">
                    <HomeSearchResult :index="index" />
                </template>
            </div>
            <h3 class="loading-fetch" v-if="searchResult.loading === true">loading...</h3>
            <h3 class="error-fetch" v-if="searchResult.error === true">something went wrong...</h3>
        </div>
        <!-- Item -->
    </div>
</template>

<script lang="ts">
// main
import './main.css';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { payloadTypeInSearchByTitle } from '@/types/types';
// components
import HomeBackground from '@/components/HomeBackground/HomeBackground.vue';
import HomeSearchInput from '@/components/HomeSearchInput/HomeSearchInput.vue';
import HomeSearchResult from '@/components/HomeSearchResult/HomeSearchResult.vue';


export default defineComponent({
    setup () {

        const getlastSearch = JSON.parse(localStorage.getItem('search') || "")
        
        const searchInput = ref(getlastSearch);
        
        const { state, dispatch } = useStore();

        const searchResult = computed((): payloadTypeInSearchByTitle => state.resultByTitle );

        const setSearchInput = ( e:string ) =>{ searchInput.value = e; }


        onBeforeMount(() => {
            if ( getlastSearch !== '') {
                dispatch('fetchResultByTitle', getlastSearch)
                window.scrollTo(0,994.8499755859375); // to scroll down
            }
        })

        const handleSubmit = async () => {
            if ( searchInput.value !== '' ) {
                localStorage.setItem('search', JSON.stringify(searchInput.value))
                await dispatch('fetchResultByTitle', searchInput.value)
                window.scrollTo(0,994.8499755859375); // to scroll down
            }
        }


        

        return {
            searchInput,
            searchResult,
            setSearchInput,
            handleSubmit
        }
    },
    
    components: {
        HomeBackground,
        HomeSearchInput,
        HomeSearchResult
    }
})
</script>
