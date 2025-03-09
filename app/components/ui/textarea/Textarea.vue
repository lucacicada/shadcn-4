<script setup lang="ts">
import type { TextareaHTMLAttributes } from 'vue'

const model = defineModel<TextareaHTMLAttributes['value']>()
</script>

<template>
  <textarea
    v-model="model"
    class="ui-textarea"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-textarea {
    @apply flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50;
  }
}
</style>
