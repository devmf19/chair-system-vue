<template>
    <TittleBar name="Crear evento" />
    <main class="h-screen md:pt-14 bg-darkblue">
        <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue">
            <div class="flex justify-center m-5">
                <button id="newProductButton" data-modal-toggle="newProductModal"
                    class="block text-ultradarkblue bg-lightblue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                    type="button">
                    Nuevo Producto
                </button>
            </div>
        </div>
    </main>
</template>

<script>
import TittleBar from '../components/TittleBar.vue';
import Product from '../components/Product.vue';

export default {
    name: 'EventCreateView',
    components: {
        TittleBar,
        Product
    }
}
</script>