<script setup>
import { RouterLink } from 'vue-router'
import ArrowBack from './icons/ArrowBack.vue';

</script>

<template>
    <div class="fixed top-0 z-50 w-full bg-darkblue text-lightblue drop-shadow-topbar">
        <div class="px-3 py-1 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="w-full flex items-center justify-start">
                    <RouterLink to="/home" class="inline-flex items-center p-2 text-sm text-lightblue rounded-lg focus:outline-none">
                        <span class="sr-only">Regresar</span>
                        <ArrowBack />
                    </RouterLink>
                    <span class="w-full text-center">Titulo</span>
                </div>
            </div>
        </div>
    </div>
</template>