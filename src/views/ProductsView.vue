<script setup>
import $ from 'jquery';
import DataTable from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-responsive-bs5'
import jsZip from 'jszip'
window.jsZip = jsZip
DataTable.use(DataTableLib)
DataTable.use(pdfmake)
DataTable.use(ButtonsHtml5)

import TittleBar from '../components/TittleBar.vue';

/*export default {
  data() {
    return {
      products: [
        { id: 1, productName: 'John', productAmount: 'Doe', productPrice: 25 },
        { id: 2, productName: 'Jane', productAmount: 'Doe', productPrice: 30 },
        { id: 3, productName: 'Bob', productAmount: 'Smith', productPrice: 40 }
      ]
    };
  },
  mounted() {
    $(document).ready(function () {
      $('#myTable').DataTable({
        lengthChange: false,
        responsive: true,
        autoWidth: false,
        language: {
          search: 'Buscar ',
          zeroRecords: 'No hay registros para mostrar',
          info: 'Mostrando del _START_ al _END_ de _TOTAL_ registros',
          infoFiltered: '(Filtrados de _MAX_ registros)',
          paginate: {
            first: 'Primero',
            previous: 'Anterior',
            next: 'Siguiente',
            last: 'Ultimo'
          }
        },
        dom: '<"mx-auto flex justify-between items-center mb-4"<"text-gray-700 font-bold text-lg"l><"flex items-center justify-end"<"mr-4" B> f>>tip',
        buttons: [
          {
            extend: 'excelHtml5',
            text: 'Exportar a Excel',
            className: 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
          },
          {
            extend: 'pdfHtml5',
            text: 'Exportar a PDF',
            className: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
          }
        ]
      });
    });
  }
};*/

</script>

<template>
  <TittleBar />
  <main class="pt-14 bg-darkblue h-screen">
    <!-- Modal toggle -->
    <div class="flex justify-center m-5">
      <button id="defaultModalButton" data-modal-toggle="defaultModal"
        class="block text-ultradarkblue bg-lightblue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button">
        Nuevo Producto
      </button>
    </div>


    <!--- <div class="m-4 flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <DataTable class="table-fixed min-w-full text-left text-sm font-light" 
            :options="{
              responsive: true,
              autoWidth: false,
              dom: 'Bfrtip',
              language: {
                search: 'Buscar ',
                zeroRecords: 'No hay registros para mostrar',
                info: 'Mostrando del _START_ al _END_ de _TOTAL_ registros',
                infoFiltered: '(Filtrados de _MAX_ registros)',
                paginate: {
                  first: 'Primero',
                  previous: 'Anterior',
                  next: 'Siguiente',
                  last: 'Ultimo'
                }
              },
              buttons: {

              }
            }">
              <thead class="text-lightblue border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">Nombre del producto</th>
                  <th scope="col" class="px-6 py-4">Cantidad</th>
                  <th scope="col" class="px-6 py-4">Precio</th>
                </tr>
              </thead>
              <tbody class="text-lightblue">
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Mark</td>
                  <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td class="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td class="whitespace-nowrap px-6 py-4">Larry</td>
                  <td class="whitespace-nowrap px-6 py-4">Wild</td>
                  <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

  -->

    <!--- <div>
      <table id="myTable" class="table-auto min-w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Nombre del producto</th>
            <th class="px-4 py-2">Cantidad</th>
            <th class="px-4 py-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border px-4 py-2">{{ product.productName }}</td>
            <td class="border px-4 py-2">{{ product.productAmount }}</td>
            <td class="border px-4 py-2">{{ product.productPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->


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
