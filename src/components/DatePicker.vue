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
  <span class="pl-1">Seleccione el intervalo de fechas</span>
  <div class="flex justify-between">
    <div class="pr-1">
      <p class="px-1 py-2">Desde:</p>
      <VueDatePicker v-model="startDate" :enable-time-picker="false" :clearable="false" />
    </div>
    <div class="pl-1">
      <p class="px-1 py-2">Hasta:</p>
      <VueDatePicker v-model="endDate" :enable-time-picker="false" :clearable="false" />
    </div>
  </div>
</template>