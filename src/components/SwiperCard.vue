<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination, Navigation]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<template>
    <div class="h-full">
        <swiper :slides-per-view="1.5" :space-between="30" @swiper="onSwiper">
            <swiper-slide>
                <div class="max-w-sm bg-ultradarkblue border rounded-2xl">
                    <h5 class="px-4 py-2 text-lg font-medium text-graytext">700</h5>
                    <span class="mx-4 text-xl font-bold text-lightblue">Sillas</span>
                    <hr class="h-1 m-4 bg-yellow-300 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="max-w-sm bg-ultradarkblue border rounded-2xl">
                    <h5 class="px-4 py-2 text-lg font-medium text-graytext">700</h5>
                    <span class="mx-4 text-xl font-bold text-lightblue">Mesas de madera</span>
                    <hr class="h-1 m-4 bg-teal-400 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="max-w-sm bg-ultradarkblue border rounded-2xl">
                    <h5 class="px-4 py-2 text-lg font-medium text-graytext">700</h5>
                    <span class="mx-4 text-xl font-bold text-lightblue">Mesas plasticas</span>
                    <hr class="h-1 m-4 bg-pink-500 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
