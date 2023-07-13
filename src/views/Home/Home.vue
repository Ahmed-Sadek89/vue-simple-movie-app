<template>
    <div>
        <HomeBackground />
        <div class="container">

            <HomeSearchInput 
                :searchInput="searchInput"
                @setSearchInput="setSearchInput"
                @handleSubmit="handleSubmit"
            />

            <div v-if="searchResult.result.length !== 0" >
                <div class="home-search-results" >
                    <template v-for="(index) in searchResult.result" :key="index.imdbID">
                        <HomeSearchResult :index="index"/>
                    </template>
                </div>

                <div class="home-pagination">
                    <button 
                        @click="page_number--, fetch_pagination(page_number)"
                        :disabled="page_number === 1"
                    >prev</button>
                    <span>{{ page_number }}</span>
                    <button 
                        @click="page_number++, fetch_pagination(page_number)"
                        :disabled="searchResult.result.length < 10"
                    >next</button>
                </div>

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
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { payloadTypeInSearchByTitle } from '@/types/types';
// components
import HomeBackground from '@/components/HomeBackground/HomeBackground.vue';
import HomeSearchInput from '@/components/HomeSearchInput/HomeSearchInput.vue';
import HomeSearchResult from '@/components/HomeSearchResult/HomeSearchResult.vue';


export default defineComponent({
    setup () {

        const getlastSearch = localStorage.getItem('search')? JSON.parse(localStorage.getItem('search') || ""): ''

        const { state, dispatch } = useStore();


        const searchInput = ref(getlastSearch);
        
        const searchResult = computed((): payloadTypeInSearchByTitle => state.resultByTitle );
        
        const setSearchInput = ( e: string ) =>{ searchInput.value = e; }
        
        const page_number = ref(1)
        const handleSubmit = async () => {
            if ( searchInput.value !== '' ) {
                page_number.value = 1
                localStorage.setItem('search', JSON.stringify(searchInput.value))
                await dispatch('fetchResultByTitle', {
                    title: searchInput.value,
                    page_number: 1
                })
                window.scrollTo(0,994.8499755859375); // to scroll down
            }
        }
        
        const fetch_pagination = async (page_number: number) => {
            window.scrollTo({top: 200, behavior: 'smooth'}); // to scroll down
            await dispatch('fetchResultByTitle', {
                title: searchInput.value,
                page_number
            })
        }
        return {
            searchInput,
            searchResult,
            page_number,
            setSearchInput,
            handleSubmit,
            fetch_pagination,
        }
    },
    components: {
        HomeBackground,
        HomeSearchInput,
        HomeSearchResult
    }
})
</script>