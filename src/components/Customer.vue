<template>
    <div class="mx-auto rounded-xl shadow-md overflow-hidden max-w-md md:max-w-2xl">
        <button v-on:click="toEventDetais" class="w-full">
            <div class="flex flex-row">
                <div class="px-4 py-2 flex flex-col justify-center items-center bg-lightGreen w-1/4">
                    <UserIcon class="w-12 h-12" />
                </div>
                <div class="px-2 py-2 flex flex-col space-y-3 bg-ultradarkblue w-4/5">
                    <div class="flex flex-row justify-between items-center">
                        <span class="text-left text-xl leading-tight font-bold text-lightblue w-2/3">{{ customer.name }} {{
                            customer.lastname }}</span>
                        <span class="text-right text-xs leading-tight font-semibold text-gray-400 w-1/3">{{ customer.dui
                        }}</span>
                    </div>
                    <div class="flex flex-row justify-between items-center">
                        <span class="text-left text-sm leading-tight font-semibold text-lightblue w-2/3">{{ customer.phone
                        }}</span>
                        <span class="text-right text-xs leading-tight font-medium text-gray-400 w-1/3">{{ customer.address
                        }}</span>
                    </div>
                </div>
            </div>
        </button>
    </div>
</template>
<script>
import UserIcon from './icons/bottom_navigation/UserIcon.vue';

export default {
    name: 'Customer',
    components: {
        UserIcon
    },
    props: {
        customer: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            data: {
                name: "",
                amount: "",
                stock: ""
            }
        }
    },
    methods: {
        getCustomer() {
            this.data.name = this.customer.name;
            this.data.amount = this.customer.amount;
            this.data.stock = this.customer.amount;
        },

    },
    mounted() {
        this.getCustomer();
    }
}
</script>
  