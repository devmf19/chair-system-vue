<script setup>
import BottomNavigation from '../components/BottomNavigation.vue'
import SideMenu from '../components/SideMenu.vue'
import TopNavbar from '../components/TopNavbar.vue'
import DatePicker from '../components/DatePicker.vue'
import SwiperCard from '../components/SwiperCard.vue'
import DetailsCard from '../components/DetailsCard.vue'

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
  <div class="h-full mt-12 sm:ml-64 sm:mt-8 bg-darkblue">
    <div class="py-2">

      <!--DATEPICKER SECTION-->
      <div class="flex flex-col justify-center h-36 mb-2  bg-darkblue border border-transparentborder">
        <div class="px-4">
          <span class="text-lg font-semibold text-lightblue">Hola, Francisco!</span>
        </div>
        <div class="px-4 py-2">
          <DatePicker />
        </div>
      </div>

      <!--GENERAL DETAILS SECTION-->
      <div class="flex flex-col justify-center h-40 mb-2  bg-darkblue border border-transparentborder">
        <div class="px-4 pt-2 text-sm text-graytext font-semibold">
          <span>General</span>
        </div>
        <div class="px-4 py-3">
          <SwiperCard />
        </div>
      </div>

      <!--DETAILS SECTION-->
      <div class="flex flex-col justify-center mb-2  bg-darkblue border border-transparentborder">
        <div class="px-4 pt-2 text-sm text-graytext font-semibold">
          <span>Detalles</span>
        </div>
        <div class=" p-4 pb-10">
          <DetailsCard />
        </div>
      </div>

      <!--BOTTOM NAVIGATION BAR-->
      <div class="flex items-center justify-center">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
