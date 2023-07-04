<template>
    <div>
        <HomeBackground />
        <div class="container">
            <HomeSearchInput 
                :searchInput="searchInput"
                @setSearchInput="setSearchInput"
                @handleSubmit="handleSubmit"
            />
            <div class="home-search-results" v-if="searchResult">
                <template v-for="(index) in searchResult" :key="index?.imdbID">
                    <HomeSearchResult :index="index" />
                </template>
            </div>
            <h3 v-else>{{ searchError }}</h3>
        </div>
        <!-- Item -->
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import HomeBackground from '@/components/HomeBackground/HomeBackground.vue';
import HomeSearchInput from '@/components/HomeSearchInput/HomeSearchInput.vue';
import HomeSearchResult from '@/components/HomeSearchResult/HomeSearchResult.vue';
import './main.css';
import { searchResultObject } from '@/types/types';
import { useStore } from 'vuex';




export default defineComponent({
    setup () {
        const searchInput = ref('');

        const { state, dispatch } = useStore();

        const searchResult = computed((): searchResultObject[] => state.resultByTitle.Search );
        const searchError = computed((): string => state.resultByTitle.Error );

        const setSearchInput = (e:string) =>{ searchInput.value = e; }

        const handleSubmit = async () => {
            await dispatch('fetchResultByTitle', searchInput.value)
        }
        return {
            searchInput,
            searchResult,
            searchError,
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
