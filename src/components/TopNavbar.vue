<template>
  <div class="fixed top-0 z-50 w-full bg-darkblue text-lightblue drop-shadow-topbar">
    <div class="px-3 py-1 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="w-full flex items-center justify-start">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none">
            <span class="sr-only">Abrir menu</span>
            <MenuIcon />
          </button>
          <span class="w-full text-center">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from './icons/sidebar_menu/MenuIcon.vue';

export default {
  name: 'TopNavBar',
  components: {
    MenuIcon
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>