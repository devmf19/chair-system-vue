<template>
    <div class="h-full">
        <swiper :slides-per-view="1.5" :space-between="30" @swiper="onSwiper" class="h-full">
            <swiper-slide>
                <div class="w-full max-w-sm bg-gray-800 border rounded-2xl shadow">
                    <h5 class="m-4 text-xl font-medium text-gray-500 dark:text-gray-400">700</h5>
                    <span class="mx-4 text-xl font-bold text-gray-50">Sillas</span>
                    <hr class="h-1 m-4 bg-gray-200 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="w-full max-w-sm bg-gray-800 border rounded-2xl shadow">
                    <h5 class="m-4 text-xl font-medium text-gray-500 dark:text-gray-400">700</h5>
                    <span class="mx-4 text-xl font-bold text-gray-50">Mesas de madera</span>
                    <hr class="h-1 m-4 bg-gray-200 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="w-full max-w-sm bg-gray-800 border rounded-2xl shadow">
                    <h5 class="m-4 text-xl font-medium text-gray-500 dark:text-gray-400">700</h5>
                    <span class="mx-4 text-xl font-bold text-gray-50">Mesas plasticas</span>
                    <hr class="h-1 m-4 bg-gray-200 border-0 dark:bg-gray-700">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
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