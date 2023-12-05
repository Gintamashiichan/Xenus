<template>
    <h1 class="flex flex-col h-full w-full mx-auto items-center justify-center">
        <i class="fa-solid fa-circle-exclamation fa-xl text-6xl"></i>
        <span class="font-extrabold text-6xl my-10">404</span>
        <span class="text-4xl mb-10">You reach the end of the world</span>
        <Buttons type="neutral"><router-link to="/">Return</router-link></Buttons>
    </h1>
</template>
<script lang="ts">
import Buttons from '../../ui/Buttons.vue';

export default {
    name: 'NotFound',
    components:{
        Buttons
    }
}
</script>