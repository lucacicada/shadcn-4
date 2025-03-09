<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/components/ui/slider'

const modelValue = ref([50])
</script>

<template>
  <Slider
    v-model="modelValue"
    :max="100"
    :step="1"
    class="w-3/5"
  />
</template>
