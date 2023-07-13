<template>
    <div class="container" v-if="Object.entries(detail.result).length === 0">
        <h3 class="loading-fetch" v-if="detail.loading === true">loading...</h3>
        <h3 class="error-fetch" v-if="detail.error === true">something went wrong...</h3>
    </div>
    
    <div class="detail container" v-if="detail.error === false && Object.entries(detail.result).length !== 0" >
        <h1>{{detail.result.Title}}</h1>
        <span>{{detail.result.Year}}</span>
        <img :src="detail.result.Poster" :alt="detail.result.Title" />
        <p>{{detail.result.Plot}}</p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount  } from 'vue'
import './main.css';
import { useStore } from 'vuex';
import { payloadTypeInSearchById } from '@/types/types';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup () {
        const { state, dispatch } = useStore();
        const route = useRoute();
        const id = computed(() => route.params.id )
        
        const detail = computed((): payloadTypeInSearchById => state.resultByID )
        onBeforeMount(() => {
            dispatch('fetchResultByID', id.value)
        })
        // watch( to notic how detail value is changed
        //     () => detail.value
        //     , ( newVal) => {
        //     console.log({ newVal})
        // })
        return {
            id: id,
            detail
        }
    },
})
</script>

<style scoped>

</style>