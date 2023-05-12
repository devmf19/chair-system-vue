<template>
    <TittleBar name="Detalles del evento" />
    <main class="h-screen md:pt-14 bg-darkblue">

        <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue">
            <div>
                <div class="flex flex-row justify-between items-center m-4">
                    <h4 class="text-gray-400 text-xs font-bold">Nombre del vento: </h4>
                    <span class="text-lightblue text-md font-semibold">{{ event.name }}</span>
                </div>
                <div class="flex flex-row justify-between items-center m-4">
                    <h4 class="text-gray-400 text-xs font-bold">Fechas del evento:</h4>
                    <span class="text-lightblue text-md font-semibold">{{ formatDate(event.initialDate) }} - {{
                        formatDate(event.endDate)
                    }}
                    </span>
                </div>
                <div>
                    <div class="flex flex-row justify-between items-center m-4">
                        <h4 class="text-gray-400 text-xs font-bold">Cliente:</h4>
                        <span class="text-lightblue text-md font-semibold">{{ event.customer.name }} {{
                            event.customer.lastname }}</span>
                    </div>
                </div>
                <div>
                    <div class="flex flex-row justify-between items-center m-4">
                        <h4 class="text-gray-400 text-xs font-bold">Usuario:</h4>
                        <span class="text-lightblue text-md font-semibold">{{ event.user.name }} {{
                            event.user.lastname }}</span>
                    </div>
                </div>
            </div>



            <div class="px-4 pt-6 pb-20">
                <div v-for="(eventDetail, key) in event.eventDetails" :key="key">
                    <div
                        class="max-w-md mb-3 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl border-2 border-darkGreen">
                        <div class="px-4 py-2 flex items-center justify-between text-base font-bold bg-ultradarkblue">
                            <div class="w-3/4">
                                <span class="block mt-1 text-lg leading-tight font-medium text-lightblue">{{
                                    eventDetail.product.name
                                }}</span>
                                <span class="block mt-1 text-xs leading-tight font-bold text-graytext">Subtotal: $
                                    {{ eventDetail.amount * eventDetail.price }}</span>
                            </div>
                            <div class="w-1/4 space-y-1">
                                <p
                                    class="text-right items-center justify-center px-2 py-0.5 ml-3 text-sm font-bold text-ultradarkblue bg-lightblue rounded">
                                    {{ eventDetail.amount }}</p>
                                <p
                                    class="text-right items-center justify-center px-2 py-0.5 ml-3 text-sm font-bold text-ultradarkblue bg-lightblue rounded">
                                    $
                                    {{ eventDetail.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="fixed bottom-0 z-50 w-full bg-darkblue text-lightblue drop-shadow-topbar">
                <div class="px-3 py-5 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="w-full flex items-center justify-between">
                            <div>
                                <span class="w-full text-left">Total: </span>
                                <span class="w-full text-left">{{ total }}</span>
                            </div>
                            <div>
                                <button v-if="event.state === 'RESERVADO'"
                                    class="w-full bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Entregar
                                </button>
                                <button v-if="event.state === 'ENTREGADO'"
                                    class="w-full bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Recibir devolucion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TittleBar from '../components/TittleBar.vue';

export default {
    name: 'EventDetailsView',
    components: {
        TittleBar,
    },
    props: {
    },
    data() {
        return {
            event: this.getEvent(),
            total: 0,
        }
    },
    methods: {
        getEvent() {
            const event = JSON.parse(localStorage.getItem('event'));
            localStorage.removeItem('event')
            return event;
        },
        calculateTotal() {
            this.total = 0;
            for (const key in this.event.eventDetails) {
                const eventDetail = this.event.eventDetails[key];
                this.total += parseInt(eventDetail.amount) * parseInt(eventDetail.price);
            }
        },
        formatDate(date) {
            if (!date) {
                return '';
            }
            const format = date.substring(5, 10);
            const month = format.substring(0, 2);
            const day = format.substring(3, 5);
            return `${day}/${month}`;
        },
    },
    mounted() {
        this.getEvent();
        this.calculateTotal();
    }
}
</script>