<template>
    <div class="item" @click="handleNavigate(index?.imdbID)">
        <div class="item-image">
        <template v-if="index?.Poster !== 'N/A'">
            <img 
                :src="index?.Poster" 
                :alt="index?.Title" 
                referrerpolicy="no-referrer-when-downgrade"
            />
        </template>
        <template v-else>
            <h6>
                Poster not found
            </h6>
        </template>
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
import { searchByTitleType } from '@/types/types';
export default defineComponent({
    props: {
        index: {
            requird: true,
            type: Object as PropType<searchByTitleType> 
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
