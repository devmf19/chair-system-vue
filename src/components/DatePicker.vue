<script setup>
import { ref } from 'vue';

const startDate = ref(new Date());

const setStartDate = (value) => {
  startDate.value = value;
}

const endDate = ref(new Date());

const setEndDate = (value) => {
  endDate.value = value;
}
</script>

<template>
  <span class="text-sm text-graytext font-medium">Seleccione el intervalo de fechas</span>
  <div class="flex justify-between">
    <div class="pr-1">
      <p class="py-1 text-sm text-graytext font-medium">Desde:</p>
      <VueDatePicker v-model="startDate" :enable-time-picker="false" :clearable="false" input-class-name="dp-custom-input" />
    </div>
    <div class="pl-1">
      <p class="py-1 text-sm text-graytext font-medium">Hasta:</p>
      <VueDatePicker v-model="endDate" :enable-time-picker="false" :clearable="false" input-class-name="dp-custom-input" />
    </div>
  </div>
</template>

<style lang="css">
.dp-custom-input {
  --dp-background-color: #E1FEFE;
  --dp-color: #1B2529;
}
</style>