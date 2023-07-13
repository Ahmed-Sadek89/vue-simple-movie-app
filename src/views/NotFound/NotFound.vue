<template>
    <div class="notfound">
        <p>
            <span>404</span>
            <span>Not Found</span>
        </p>
        <button @click="main">back to main</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import './main.css';

export default defineComponent({
    setup () {
        const route = useRouter()
        const main = () => route.push({name: 'home'})

        return {
            main
        }
    }
})
</script>