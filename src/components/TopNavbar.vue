<script setup>
import MenuIcon from './icons/sidebar_menu/MenuIcon.vue';

</script>

<template>
    <div class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-1 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="w-full flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Abrir menu</span>
                        <MenuIcon />
                    </button>
                    <span class="w-full text-center">Titulo de ventana</span>
                </div>
            </div>
        </div>
    </div>
</template>