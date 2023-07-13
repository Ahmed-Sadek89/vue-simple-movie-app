<template>
    <form class="home-form" @submit.prevent="handleSubmit">
        <input 
            type="text" 
            placeholder="What are you looking for ?" 
            v-model="searchInput" 
            @input="setSearchInput"
            autofocus
        />
        <input type="submit" value="search" />
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './main.css';

export default defineComponent({
    props: {
        searchInput: {
            type: String
        }
    },
    setup(props, {emit}) {
        const searchInput = props.searchInput;
        const setSearchInput = (e: any) => {
            emit('setSearchInput', e.target.value);
        }
        const handleSubmit = () => {
            emit('handleSubmit');
        }
        return {
            searchInput,
            setSearchInput,
            handleSubmit
        }
    }
})
</script>

<style scoped>

</style>