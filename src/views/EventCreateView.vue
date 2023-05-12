<template>
    <TittleBar name="Crear evento" />
    <main class="h-screen md:pt-14 bg-darkblue">
        <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue md:pt-0">
            <div>
                <div class="flex flex-col justify-start m-5">
                    <h2 class="text-lightblue text-lg font-bold">Fechas del evento:</h2>
                    <h2 class="text-lightblue text-lg font-medium">Desde {{ initialDate }} Hasta {{ endDate }}</h2>
                </div>

                <div class="flex justify-between mx-5 mb-3">
                    <input type="text" v-model="eventName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-lightblue focus:border-lightblue block w-full p-2.5"
                        placeholder="Nombre para el evento">
                </div>

                <div class="flex justify-between mx-5">
                    <button id="dropdownCustomers" data-dropdown-toggle="dpdwnCustomers"
                        class="w-full bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Seleccionar cliente
                    </button>
                </div>
                <div class="flex justify-start m-5">
                    <h2 class="text-lightblue text-lg font-bold">Cliente: {{ customerName }}</h2>
                </div>
            </div>



            <div class="px-4 py-6">
                <div v-for="(product, key) in products" :key="key">
                    <div class="max-w-md mb-3 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">

                        <div class="px-8 py-4 flex items-center justify-between text-base font-bold bg-ultradarkblue">
                            <span class="block mt-1 text-lg leading-tight font-medium text-lightblue">{{ product.name
                            }}</span>
                            <div class="w-1/3 space-y-1">
                                <p
                                    class="text-right items-center justify-center px-2 py-0.5 ml-3 text-md font-bold text-ultradarkblue bg-lightblue rounded">
                                    {{ product.amount }}</p>
                                <p
                                    class="text-right items-center justify-center px-2 py-0.5 ml-3 text-md font-bold text-ultradarkblue bg-lightblue rounded">
                                    $
                                    {{ product.price }}</p>
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
                                <button v-on:click="createEvent"
                                    class="w-full bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Crear evento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div id="dpdwnCustomers"
                class="z-10 hidden w-64 p-3 bg-ultradarkblue border-2 border-lightblue rounded-lg shadow">
                <h6 class="mb-3 text-sm font-medium text-lightblue">
                    Clientes
                </h6>
                <ul v-for="(customer, index) in customers" :key="index" class="space-y-2 text-sm"
                    aria-labelledby="dpdwnCustomers">
                    <li class="flex items-center">
                        <button data-dropdown-toggle="dpdwnCustomers" v-on:click="setCustomerDui(customer)"
                            class="bg-darkblue w-full mx-2 p-1 text-sm font-medium text-lightblue text-right border-2 border-transparent border-b-graytext">
                            {{ customer.name }} {{ customer.lastname }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import { initFlowbite } from 'flowbite'
import TittleBar from '../components/TittleBar.vue';
import Product from '../components/Product.vue';
import customersService from '../services/customers.service';
import eventService from '../services/events.service';

export default {
    name: 'EventCreateView',
    components: {
        TittleBar,
        Product,
    },
    data: () => ({
        products: null,
        initialDate: "",
        endDate: "",
        eventName: "",
        userId: "",
        customerName: "",
        customers: null,
        total: 0,

    }),
    methods: {
        setCustomerDui(customer) {
            const eventCart = JSON.parse(localStorage.getItem('eventCart'));
            eventCart.customer = customer.dui;
            localStorage.setItem('eventCart', JSON.stringify(eventCart));
            this.customerName = customer.name + ' ' + customer.lastname;
        },
        setEventName() {
            if (this.eventName.trim().length > 0) {
                const eventCart = JSON.parse(localStorage.getItem('eventCart'));
                eventCart.eventName = this.eventName;
                localStorage.setItem('eventCart', JSON.stringify(eventCart));
                return true;
            }
            console.log('Ingrese un nombre para el evento')
            return false;
        },
        calculateTotal() {
            let total = 0;
            for (const key in this.products) {
                const product = this.products[key];
                total += parseInt(product.amount) * parseInt(product.price);
            }
            return total;
        },
        async productsList() {
            const eventCart = JSON.parse(localStorage.getItem('eventCart'));
            this.products = eventCart.products;
            this.initialDate = eventCart.initialDate;
            this.endDate = eventCart.endDate;
            this.total = this.calculateTotal();
            this.customers = await customersService.getCustomers();

        },
        createEvent() {
            if (this.setEventName()) {
                const eventCart = JSON.parse(localStorage.getItem('eventCart'));
                eventService.createEvente(eventCart);
                localStorage.removeItem('eventCart');
                this.$router.push("/home");
            }
        }
    },
    mounted() {
        this.productsList();
        initFlowbite();
    }
}
</script>