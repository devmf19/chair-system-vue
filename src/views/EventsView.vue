<template>
  <!--PAGE TITLE AND BUTTON MENU-->
  <TopNavbar name="Eventos" />

  <!--SIDEMENU-->
  <SideMenu />

  <!--MAIN-->
  <div class="h-screen pt-8 sm:ml-64">
    <div class="pb-8 bg-darkblue">
      <div class="px-4 py-6 space-y-4">
        <div v-for="event in events" :key="event.id">
          <Event :event="event" />
        </div>
      </div>

      <!--BOTTOM NAVIGATION BAR-->
      <div class="flex items-center justify-center">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import SideMenu from '../components/SideMenu.vue'
import TopNavbar from '../components/TopNavbar.vue'
import Event from '../components/Event.vue'
import eventsService from '../services/events.service';

export default {
  name: 'EventsView',
  components: {
    BottomNavigation,
    SideMenu,
    TopNavbar,
    Event
  },
  data() {
    return {
      events: null,
    }
  },
  methods: {
    async getEvents() {
      try {
        const response = await eventsService.getEvents();
        this.events = response;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getEvents();
  }
}
</script>
