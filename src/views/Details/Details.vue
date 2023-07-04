<template>
    <div class="detail container" v-if="detail">
        <h1>{{detail.Title}}</h1>
        <span>{{detail.Year}}</span>
        <img :src="detail.Poster" :alt="detail.Title" />
        <p>{{detail.Plot}}</p>
    </div>
    <div class="detail container" v-else>
        <h1>no data</h1>
        
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount  } from 'vue'
import './main.css';
import { useStore } from 'vuex';
import { detailType } from '@/types/types';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup () {
        const { state, dispatch } = useStore();
        const route = useRoute();
        const id = computed(() => route.params.id )
        
        const detail = computed((): detailType => state.resultByID )
        onBeforeMount(() => {
            state.resultByID = null
            dispatch('fetchResultByID', id.value)
        })
        return {
            id: id,
            detail
        }
    },
})
</script>

<style scoped>

</style>