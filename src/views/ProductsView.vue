<script setup>
</script>
<template>
  <TittleBar />
  <main class="pt-14 bg-graytext h-screen">
    <!-- Modal toggle -->
    <div class="flex justify-center m-5">
      <button id="defaultModalButton" data-modal-toggle="defaultModal"
        class="block text-ultradarkblue bg-lightblue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button">
        Nuevo Producto
      </button>
    </div>

    <!-- Main modal -->
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-ultradarkblue rounded-lg shadow sm:p-5 border-2 border-lightblue">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-lightblue">
              Nuevo producto
            </h3>
            <button type="button"
              class="text-red-500 bg-transparent hover:text-red-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal">
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
          <form action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="productName" class="block mb-2 text-sm font-medium text-lightblue">Nombre del
                  producto:</label>
                <input type="text" name="productName" id="productName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nombre del producto" required="">
              </div>
              <div>
                <label for="productAmount" class="block mb-2 text-sm font-medium text-lightblue">Cantidad</label>
                <input type="number" name="productAmount" id="productAmount"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="000" required="">
              </div>
              <div>
                <label for="productPrice" class="block mb-2 text-sm font-medium text-lightblue">Precio alquiler:</label>
                <input type="number" name="productPrice" id="productPrice"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="$2000" required="">
              </div>
            </div>
            <button type="submit"
              class="text-darkblue inline-flex items-center bg-lightblue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"></path>
              </svg>
              Registrar producto
            </button>
          </form>
        </div>
      </div>
    </div>



  </main>
</template>
