<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

const model = defineModel<InputHTMLAttributes['value']>()
</script>

<template>
  <input
    v-model="model"
    class="ui-input"
  >
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-input {
    @apply flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50;
  }
}
</style>
