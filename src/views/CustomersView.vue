<template>
    <TittleBar name="Productos" />
    <main class="h-screen md:pt-14 bg-darkblue">

        <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue">

            <div class="flex justify-center m-5">
                <button type="button"
                    class="bg-darkGreen hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    data-te-toggle="modal" data-te-target="#customerCreateModal" data-te-ripple-init
                    data-te-ripple-color="dark">
                    Nuevo cliente
                </button>
            </div>

            <div class="px-4 py-6">
                <div v-for="customer in customers" :key="customer.id">
                    <div
                        class="max-w-md mb-3 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl border-2 border-darkGreen">
                        <Customer :customer="customer" />
                    </div>
                </div>
            </div>

        </div>



        <!-- CREATE PRODUCT MODAL -->
        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="customerCreateModal" tabindex="-1" aria-labelledby="customerCreateModalLabel" aria-hidden="true">
            <div data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                    class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-lg bg-ultradarkblue bg-clip-padding text-current shadow-lg outline-none border-2 border-darkGreen">
                    <div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
                        <!--Modal title-->
                        <h5 class="text-xl font-medium leading-normal text-lightblue" id="customerCreateModalLabel">
                            Nuevo cliente
                        </h5>
                        <!--Close button-->
                        <button type="button"
                            class="text-red-500 bg-transparent hover:text-red-600 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
                            data-te-modal-dismiss aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!--Modal body-->

                    <form action @submit.prevent="saveCustomer">
                        <div class="relative flex-auto p-4" data-te-modal-body-ref>
                            <div class="grid gap-4 mb-4 md:grid-cols-2">
                                <div>
                                    <label for="customerDui" class="block mb-2 text-md font-medium text-lightblue">Numero de
                                        identificacion:</label>
                                    <input type="number" name="customerDui" id="customerDui"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="00000000" v-model="dataNewCustomer.dui" required>
                                </div>
                                <div>
                                    <label for="customerName"
                                        class="block mb-2 text-md font-medium text-lightblue">Nombres:</label>
                                    <input type="text" name="customerName" id="customerName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Nombre del cliente" v-model="dataNewCustomer.name" required>
                                </div>
                                <div>
                                    <label for="customerLastname"
                                        class="block mb-2 text-md font-medium text-lightblue">Apellidos:</label>
                                    <input type="text" name="customerLastname" id="customerLastname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Apellido del cliente" v-model="dataNewCustomer.lastname" required>
                                </div>
                                <div>
                                    <label for="customerPhone"
                                        class="block mb-2 text-md font-medium text-lightblue">Telefono:</label>
                                    <input type="text" name="customerPhone" id="customerPhone"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Numero de telefono" v-model="dataNewCustomer.phone" required>
                                </div>
                                <div>
                                    <label for="customerAddress"
                                        class="block mb-2 text-md font-medium text-lightblue">Direccion:</label>
                                    <input type="text" name="customerAddress" id="customerAddress"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Numero de telefono" v-model="dataNewCustomer.address" required>
                                </div>
                                <div>
                                    <label for="customerEmail"
                                        class="block mb-2 text-md font-medium text-lightblue">Correo:</label>
                                    <input type="email" name="customerEmail" id="customerEmail"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="correo@ejemplo.com" v-model="dataNewCustomer.email" required>
                                </div>
                            </div>
                        </div>

                        <!--Modal footer-->
                        <div class="mx-4 mb-4 flex flex-row items-center justify-between rounded-b-md">
                            <button type="button"
                                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="dark">
                                Cancelar
                            </button>
                            <button type="submit"
                                class="bg-darkGreen hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="dark">
                                Registrar producto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
import {
    Modal,
    Ripple,
    initTE,
} from "tw-elements";
import customersService from '../services/customers.service'
import Customer from '../components/Customer.vue';
import TittleBar from '../components/TittleBar.vue';
import Edit from '../components/icons/Edit.vue';

export default {
    name: 'CustomersView',
    components: {
        Customer,
        TittleBar,
        Edit
    },
    data() {
        return {
            customers: null,
            dataNewCustomer: {
                dui: "",
                name: "",
                lastname: "",
                phone: "",
                address: "",
                email: ""
            },
        }
    },
    methods: {
        async getCustomers() {
            try {
                const responnse = await customersService.getCustomers();
                this.customers = responnse;
            } catch (error) {
                console.error(error);
            }
        },
        async saveCustomer() {
            try {
                const response = await customersService.saveCustomer(this.dataNewCustomer);
                this.dataNewCustomer.dui = "";
                this.dataNewCustomer.name = "";
                this.dataNewCustomer.lastname = "";
                this.dataNewCustomer.phone = "";
                this.dataNewCustomer.address = "";
                this.dataNewCustomer.email = "";
                console.log(response);
                this.getCustomers();
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getCustomers();
        initTE({ Modal, Ripple });
    }
}
</script>