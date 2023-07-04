<template>
    <header>
        <router-link :to="{name: 'home'}">
            <span>Sadek</span>
            <span>Movies</span>
        </router-link>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './main.css';

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>