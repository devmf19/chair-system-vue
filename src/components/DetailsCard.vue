<template>
    <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="px-8 py-4 flex items-center justify-between text-base font-bold bg-ultradarkblue">
            <span class="block mt-1 text-lg leading-tight font-medium text-lightblue">{{ product.productName }}</span>
            <span
                class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-md font-bold text-ultradarkblue bg-lightblue rounded">{{
                    product.available }}</span>
        </div>
        <div class="px-8 py-2 flex flex-row justify-between">
            <div class="mr-1">
                <input v-model="amount" type="text" name="amount" id="amount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg focus:ring-lightblue focus:border-lightblue block w-full"
                    placeholder="Cantidad" required>
            </div>
            <div class="ml-1">
                <input v-model="price" type="number" name="price" id="price" placeholder="Precio"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg focus:ring-lightblue focus:border-lightblue block w-full"
                    required>
            </div>
            <div class="flex ml-1">
                <button v-on:click="addToCart()">
                    <Add />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Add from './icons/Add.vue';


export default {
    name: 'DetailsCard',
    components: { Add },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        /*data: {
            productId: "",
            productName: "",
            available: "",
        },*/
        amount: "",
        price: ""
    }),
    methods: {
        addToCart(){
            if(this.amount < 1 || this.price < 0) {
                console.log('Ingrese una cantidad mayor a 1 y un precio mayor a 0');
                return;
            }
            if(this.amount > this.product.available) {
                console.log('Solo pueden alquilar '+this.product.available+' unidades de '+this.product.productName);
                return;
            }
            const eventCart = JSON.parse(localStorage.getItem('eventCart'));
            eventCart.products[this.product.productId] = {name: this.product.productName, amount: this.amount, price: this.price};
            localStorage.setItem('eventCart', JSON.stringify(eventCart));
        }
    },
}
</script>