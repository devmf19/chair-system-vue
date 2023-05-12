<template>
  <TittleBar name="Productos" />
  <main class="h-screen md:pt-14 bg-darkblue">

    <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue">


      <div class="flex justify-center m-5">
        <button id="newProductButton" data-modal-toggle="newProductModal"
          class="block text-ultradarkblue bg-lightblue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
          type="button">
          Nuevo Producto
        </button>
      </div>

      <div class="px-4 py-6">
        <div v-for="product in products" :key="product.id">
          <div class="max-w-md mb-3 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <Product :product="{ id: product.id, name: product.name, amount: product.amount }" />
            <div class="px-8 py-2 flex flex-row justify-around">
              <button id="updateProductButton" data-modal-toggle="updateProductModal" type="button" v-on:click="setUpdateProduct(product.id, product.name, product.amount)">
                <Edit />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!-- CREATE MODAL-->
    <div id="newProductModal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-ultradarkblue rounded-lg shadow md:p-5 border-2 border-lightblue">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b md:mb-5">
            <h3 class="text-lg font-semibold text-lightblue">
              Nuevo producto
            </h3>
            <button type="button"
              class="text-red-500 bg-transparent hover:text-red-600 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="newProductModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Cancelar</span>
            </button>
          </div>
          <!-- Modal body -->
          <form action @submit.prevent="saveProduct">
            <div class="grid gap-4 mb-4 md:grid-cols-2">
              <div>
                <label for="productName" class="block mb-2 text-md font-medium text-lightblue">Nombre del
                  producto:</label>
                <input type="text" name="productName" id="productName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nombre del producto" v-model="dataNewProduct.name" required>
              </div>
              <div>
                <label for="productAmount" class="block mb-2 text-md font-medium text-lightblue">Cantidad</label>
                <input type="number" name="productAmount" id="productAmount"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="000" v-model="dataNewProduct.amount" required>
              </div>
            </div>
            <button type="submit"
              class="text-darkblue inline-flex items-center bg-lightblue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
              dataNewProduct-modal-toggle="newProductModal">
              Registrar producto
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Update modal -->
    <div id="updateProductModal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-ultradarkblue rounded-lg shadow md:p-5 border-2 border-lightblue">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-lightblue">
              Actualizar producto
            </h3>
            <button type="button"
              class="text-red-500 bg-transparent hover:text-red-600 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="updateProductModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Cancelar</span>
            </button>
          </div>
          <!-- Modal body -->
          <form action @submit.prevent="updateProduct">
            <div class="grid gap-4 mb-4 md:grid-cols-2">
              <div>
                <label for="productNameUpdate" class="block mb-2 text-md font-medium text-lightblue">Nombre del
                  producto:</label>
                <input type="text" name="productNameUpdate" id="productNameUpdate"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nombre del producto" v-model="dataUpdateProduct.name" required>
              </div>
              <div>
                <label for="productAmountUpdate" class="block mb-2 text-md font-medium text-lightblue">Cantidad</label>
                <input type="number" name="productAmountUpdate" id="productAmountUpdate"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="000" v-model="dataUpdateProduct.amount" required>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button type="submit"
                class="text-darkblue inline-flex items-center bg-lightblue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                data-modal-toggle="updateProductModal">
                Actualizar producto
              </button>
              <button type="button"
                class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                data-modal-toggle="updateProductModal"
                v-on:click="deleteProduct">
                <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
                Eliminar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { initFlowbite } from 'flowbite';
import productsService from '../services/products.service'
import Product from '../components/Product.vue';
import TittleBar from '../components/TittleBar.vue';
import Edit from '../components/icons/Edit.vue';

export default {
  name: 'ProductsView',
  components: {
    Product,
    TittleBar,
    Edit
  },
  data() {
    return {
      products: null,
      dataNewProduct: {
        name: "",
        amount: "",
        stock: ""
      },
      dataUpdateProduct: {
        id: "",
        name: "",
        amount: "",
        stock: ""
      },
    }
  },
  methods: {
    setUpdateProduct(id, name, amount){
      this.dataUpdateProduct.id = id;
      this.dataUpdateProduct.name = name;
      this.dataUpdateProduct.amount = amount;
      this.dataUpdateProduct.stock = amount;
    },
    async getProducts() {
      try {
        const responnse = await productsService.getProducts();
        this.products = responnse;
      } catch (error) {
        console.error(error);
      }
    },
    async saveProduct() {
      try {
        this.dataNewProduct.stock = this.dataNewProduct.amount;
        const response = await productsService.saveProduct(this.dataNewProduct);
        this.dataNewProduct.name = "";
        this.dataNewProduct.amount = "";
        this.dataNewProduct.stock = "";
        console.log(response);
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct() {
      try {
        const id = this.dataUpdateProduct.id;
        delete this.dataUpdateProduct.id;
        const response = await productsService.updateProduct(id, this.dataUpdateProduct);
        this.dataUpdateProduct.name = "";
        this.dataUpdateProduct.amount = "";
        this.dataUpdateProduct.stock = "";
        console.log(response);
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct() {
      try {
        console.log(this.dataUpdateProduct.id);
        const response = await productsService.deleteProduct(this.dataUpdateProduct.id);
        console.log(response);
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getProducts();
    initFlowbite();
  }
}
</script>

