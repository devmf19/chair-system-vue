<template>
  <!--PAGE TITLE AND BUTTON MENU-->
  <TopNavbar name="Inicio"/>

  <!--SIDEMENU-->
  <SideMenu />

  <!--MAIN-->
  <div class="h-screen pt-12 sm:ml-64 sm:pt-8 bg-darkblue">
    <div class="py-2">

      <!--DATEPICKER SECTION-->
      <div class="flex flex-col justify-center h-48 mb-2  bg-darkblue border border-transparentborder">
        <div class="px-4">
          <span class="text-lg font-semibold text-lightblue">Hola, usuario!</span>
        </div>
        <div class="px-4 py-2">
          <DatePicker @getDateRange="getAvailables" />
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
      <div class="flex flex-col justify-center bg-darkblue border border-transparentborder">
        <div class="px-4 py-2 text-sm text-graytext font-semibold">
          <span>Detalles</span>
        </div>
        <div v-for="product in products" :key="product.productId" class="px-4 pb-6">
          <DetailsCard
            :product="{ productId: product.productId, productName: product.productName, available: product.available }" />
        </div>
        <div class="pb-14 mx-4">
          <div class="mx-auto max-w-md md:max-w-2xl ">
            <button v-on:click="toEventCreate"
              class="w-full bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 mt-2 rounded focus:outline-none focus:shadow-outline">
              Siguiente
            </button>
          </div>
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
import { initFlowbite } from 'flowbite'
import BottomNavigation from '../components/BottomNavigation.vue'
import SideMenu from '../components/SideMenu.vue'
import TopNavbar from '../components/TopNavbar.vue'
import DatePicker from '../components/DatePicker.vue'
import SwiperCard from '../components/SwiperCard.vue'
import DetailsCard from '../components/DetailsCard.vue'
import productsService from '../services/products.service'

export default {
  name: 'HomeView',
  components: {
    BottomNavigation,
    SideMenu,
    TopNavbar,
    DatePicker,
    SwiperCard,
    DetailsCard
  },
  data() {
    return {
      products: null,
      eventCart: {
        eventId: "",
        eventName: "",
        user: "",
        customer: "",
        initialDate: "",
        endDate: "",
        products: {

        }
      }
    };
  },
  methods: {
    async getAvailables(dateRange) {
      const response = await productsService.getAvailables({
        initialDate: dateRange.initialDate,
        endDate: dateRange.endDate
      });
      this.products = response;
      this.eventCart.initialDate = dateRange.initialDate;
      this.eventCart.endDate = dateRange.endDate;
      this.eventCart.user = localStorage.getItem('userDui');
      localStorage.setItem('eventCart', JSON.stringify(this.eventCart));
    },
    toEventCreate() {
      const products = JSON.parse(localStorage.getItem('eventCart')).products;
      if (Object.keys(products).length > 0) {
        this.$router.push("/event-create");
      }
    },
    mounted() {
      initFlowbite();
      getAvailables();
    }
  }
}
</script>
