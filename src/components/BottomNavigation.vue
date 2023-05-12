<template>
    <nav class="pt-2 fixed bottom-0 w-full bg-darkblue border-b border-darkblue drop-shadow-bottombar">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto my-2">
            <RouterLink to="/home" data-tooltip-target="tooltip-home" type="button"
                class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <HomeIcon />
                <span class="sr-only">Inicio</span>
            </RouterLink>
            <div id="tooltip-home" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Inicio
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <RouterLink to="/events" data-tooltip-target="tooltip-events" type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <CalendarIcon class="w-6 h-6" />
                <span class="sr-only">Eventos</span>
            </RouterLink>
            <div id="tooltip-events" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Eventos
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <RouterLink to="/statistics" data-tooltip-target="tooltip-statistics" type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <ChartBarIcon />
                <span class="sr-only">Estadisticas</span>
            </RouterLink>
            <div id="tooltip-statistics" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Estadisticas
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <RouterLink to="/money" data-tooltip-target="tooltip-settings" type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <MoneyIcon />
                <span class="sr-only">Dinero</span>
            </RouterLink>
            <div id="tooltip-settings" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Dinero
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <RouterLink to="/profile" data-tooltip-target="tooltip-profile" type="button"
                class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <UserIcon />
                <span class="sr-only">Perfil</span>
            </RouterLink>
            <div id="tooltip-profile" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Perfil
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </nav>
</template>

<script >
import { RouterLink } from 'vue-router'

import HomeIcon from './icons/bottom_navigation/HomeIcon.vue'
import CalendarIcon from './icons/bottom_navigation/CalendarIcon.vue'
import ChartBarIcon from './icons/bottom_navigation/ChartBarIcon.vue'
import MoneyIcon from './icons/bottom_navigation/MoneyIcon.vue'
import UserIcon from './icons/bottom_navigation/UserIcon.vue'

export default {
  name: 'BottomNavigation',
  components: {
    HomeIcon,
    CalendarIcon,
    ChartBarIcon,
    MoneyIcon,
    UserIcon
  }
}
</script>
