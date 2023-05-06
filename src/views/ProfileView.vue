<script setup>
import BottomNavigation from '../components/BottomNavigation.vue'
import SideMenu from '../components/SideMenu.vue'
import TopNavbar from '../components/TopNavbar.vue'

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
        
        <h2>PERFIL</h2>

      <!--BOTTOM NAVIGATION BAR-->
      <div class="flex items-center justify-center">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>