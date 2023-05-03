<script setup>
import BottomNavigation from '../components/BottomNavigation.vue'
import SideMenu from '../components/SideMenu.vue'
import TopNavbar from '../components/TopNavbar.vue'
import DatePicker from '../components/DatePicker.vue'
import SwiperCard from '../components/SwiperCard.vue'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <!--PAGE TITLE AND BUTTON MENU-->
  <TopNavbar />

  <!--SIDEMENU-->
  <SideMenu />

  <!--MAIN-->
  <div class="mt-14 sm:ml-64 sm:mt-10">
    <div class="p-2">

      <!--DATEPICKER SECTION-->
      <div class="flex flex-col items-center justify-center h-48 mb-4  rounded bg-gray-400 dark:bg-gray-800">
        <div class="w-full p-4">
          <span>Hola, Francisco!</span>
        </div>
        <div class="w-full p-4">
          <DatePicker />
        </div>
      </div>

      <!--GENERAL DETAILS SECTION-->
      <div class="flex flex-col h-56 mb-4 rounded bg-gray-400 dark:bg-gray-800">
        <div class="w-full p-4">
          <span>General</span>
        </div>
        <div class="w-full p-4">
          <SwiperCard />
        </div>
      </div>

      <!--BOTTOM NAVIGATION BAR-->
      <div class="flex items-center justify-center">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
