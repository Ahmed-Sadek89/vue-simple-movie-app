<template>
    <div class="item" @click="handleNavigate(index?.imdbID)">
        <div class="item-image">
            <img :src="index?.Poster" :alt="index?.Title" />
            <span>{{ index?.Type }}</span>
        </div>
        <div class="item-info">
            <span>{{ index?.Year }}</span>
            <h2>{{ index?.Title }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import './main.css'
import { useRouter } from 'vue-router'
import { searchResultObject } from '@/types/types';
export default defineComponent({
    props: {
        index: {
            requird: true,
            type: Object as PropType<searchResultObject> 
        }
    },
    setup (props) {
      const router = useRouter();
            
      const handleNavigate = async (id: string | undefined) => {
        router.push({name:'details', params: {id}})
        
      }
      return {
          index: props.index,
          handleNavigate
      }
    },

})
</script>
