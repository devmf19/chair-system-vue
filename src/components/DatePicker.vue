<template>
  <div class="max-w-md  md:max-w-2xl mx-auto">
    <span class="text-sm text-graytext font-medium">Seleccione el intervalo de fechas</span>
    <div class="flex justify-between">
      <div class="pr-1">
        <p class="py-1 text-sm text-graytext font-medium">Desde:</p>
        <VueDatePicker v-model="initialDate" :enable-time-picker="false" :clearable="false"
          input-class-name="dp-custom-input" />
      </div>
      <div class="pl-1">
        <p class="py-1 text-sm text-graytext font-medium">Hasta:</p>
        <VueDatePicker v-model="endDate" :enable-time-picker="false" :clearable="false"
          input-class-name="dp-custom-input" />
      </div>
    </div>
    <button v-on:click="updateDateRange"
      class="bg-lightblue hover:bg-teal-200 text-ultradarkblue font-bold py-2 mt-2 w-full rounded focus:outline-none focus:shadow-outline">
      Buscar
    </button>
  </div>
</template>

<script>
import { ref, defineEmits } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';

export default {
  name: 'DatePicker',
  components: {
    VueDatePicker
  },
  props: {},
  data() {
    return {
      initialDate: ref(new Date()),
      endDate: ref(new Date()),
    }
  },
  methods: {
    format(date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month > 9) {
        return `${year}-${month}-${day}`;
      }
      return `${year}-0${month}-${day}`;
    },
    updateDateRange() {
      this.$emit('getDateRange', {
        initialDate: this.format(this.initialDate),
        endDate: this.format(this.endDate),
      });
      console.log(this.format(this.initialDate))
      console.log( this.format(this.endDate))
     
    }
  },
  mounted() {
    this.updateDateRange()
  }
}
</script>

<style lang="css">
.dp-custom-input {
  --dp-background-color: #E1FEFE;
  --dp-color: #1B2529;
}
</style>