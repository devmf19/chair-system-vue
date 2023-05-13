<template>
  <TittleBar name="Productos" />
  <main class="h-screen md:pt-14 bg-darkblue">

    <div class="pt-11 h:screen flex flex-col mb-2 bg-darkblue">

      <div class="flex justify-center m-5">
        <button type="button"
          class="bg-darkGreen hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          data-te-toggle="modal" data-te-target="#productCreateModal" data-te-ripple-init data-te-ripple-color="dark">
          Nuevo producto
        </button>
      </div>

      <div class="px-4 py-6">
        <div v-for="product in products" :key="product.id">
          <div class="max-w-md mb-3 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl border-2 border-darkGreen">
            <Product :product="{ id: product.id, name: product.name, amount: product.amount }" />
            <div class="px-8 py-2 flex flex-row justify-around bg-lightGreen">
              <button type="button" data-te-toggle="modal" data-te-target="#productUpdateModal" data-te-ripple-init
                data-te-ripple-color="dark" v-on:click="setUpdateProduct(product.id, product.name, product.amount)">
                <Edit />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- CREATE PRODUCT MODAL -->
    <div data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="productCreateModal" tabindex="-1" aria-labelledby="productCreateModalLabel" aria-hidden="true">
      <div data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
        <div
          class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-lg bg-ultradarkblue bg-clip-padding text-current shadow-lg outline-none border-2 border-darkGreen">
          <div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
            <!--Modal title-->
            <h5 class="text-xl font-medium leading-normal text-lightblue" id="productCreateModalLabel">
              Nuevo producto
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

          <form action @submit.prevent="saveProduct">
            <div class="relative flex-auto p-4" data-te-modal-body-ref>
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

    <!-- UPDATE PRODUCT MODAL -->
    <div data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="productUpdateModal" tabindex="-1" aria-labelledby="productUpdateModalLabel" aria-hidden="true">
      <div data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
        <div
          class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-lg bg-ultradarkblue bg-clip-padding text-current shadow-lg outline-none border-2 border-darkGreen">
          <div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
            <!--Modal title-->
            <h5 class="text-xl font-medium leading-normal text-lightblue" id="productUpdateModalLabel">
              Actualizar producto
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

          <form action @submit.prevent="updateProduct">
            <div class="relative flex-auto p-4" data-te-modal-body-ref>
              <div class="grid gap-4 mb-4 md:grid-cols-2">
                <div>
                  <label for="productName" class="block mb-2 text-md font-medium text-lightblue">Nombre del
                    producto:</label>
                  <input type="text" name="productName" id="productName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Nombre del producto" v-model="dataUpdateProduct.name" required>
                </div>
                <div>
                  <label for="productAmount" class="block mb-2 text-md font-medium text-lightblue">Cantidad</label>
                  <input type="number" name="productAmount" id="productAmount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="000" v-model="dataUpdateProduct.amount" required>
                </div>
              </div>
            </div>

            <!--Modal footer-->
            <div class="mx-4 mb-4 flex flex-row items-center justify-between rounded-b-md">
              <button type="button" v-on:click="deleteProduct"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="dark">
                Eliminar producto
              </button>
              <button type="submit"
                class="bg-darkGreen hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="dark">
                Actualizar producto
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
    setUpdateProduct(id, name, amount) {
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
    initTE({ Modal, Ripple });
  }
}
</script>

