<template>
    <div class="mx-auto rounded-xl shadow-md overflow-hidden max-w-md md:max-w-2xl border-2 border-darkGreen">
        <button v-on:click="toEventDetais" class="w-full">
            <div class="flex flex-row">
                <div class="px-4 py-2 flex flex-col justify-center items-center bg-lightGreen w-1/4">
                    <CalendarIcon class="w-12 h-12" />
                </div>
                <div class="px-2 py-2 flex flex-col space-y-3 bg-ultradarkblue w-4/5">
                    <div class="flex flex-row justify-between items-center">
                        <span class="text-left text-xl leading-tight font-bold text-lightblue w-2/3">{{ event.name }}</span>
                        <span
                            class="text-right text-xs leading-tight font-semibold text-gray-400 w-1/3">{{ formatDate(event.initialDate) }}
                            - {{ formatDate(event.endDate) }}</span>
                    </div>
                    <div class="flex flex-row justify-between items-center">
                        <span class="text-left text-sm leading-tight font-semibold text-lightblue w-2/3">{{
                            event.customer.name }} {{ event.customer.lastname }}</span>
                        <span class="text-right text-xs leading-tight font-medium text-gray-400 w-1/3">{{ event.state
                        }}</span>
                    </div>
                </div>
            </div>
        </button>
    </div>
</template>

<script>
import See from '../components/icons/See.vue'
import CalendarIcon from '../components/icons/bottom_navigation/CalendarIcon.vue';

export default {
    name: 'Event',
    components: {
        See,
        CalendarIcon
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        formatDate(date) {
            const format = date.substring(5, 10);
            const month = format.substring(0, 2);
            const day = format.substring(3, 5);
            return `${day}/${month}`;
        },
        toEventDetais() {
            localStorage.setItem('event', JSON.stringify(this.event));
            this.$router.push("/event-details");
        },
    }
}
</script>