<template>
  <div class="px-8 py-4 flex items-center justify-between text-base font-bold bg-ultradarkblue">
    <span class="block mt-1 text-lg leading-tight font-medium text-lightblue">{{ product.name }}</span>
    <span
      class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-md font-bold text-ultradarkblue bg-lightblue rounded">{{
        product.amount }}</span>
  </div>
</template>

<script>
import Edit from './icons/Edit.vue';
import See from './icons/See.vue';
import Delete from './icons/Delete.vue';

export default {
  name: 'Product',
  components: {
    Edit,
    See,
    Delete
  },
  props: {
    product: {
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
    getProduct() {
      this.data.name = this.product.name;
      this.data.amount = this.product.amount;
      this.data.stock = this.product.amount;
    },
    
  },
  mounted() {
    this.getProduct();
  },
  mounted() {
    initFlowbite();
  }
}
</script>

