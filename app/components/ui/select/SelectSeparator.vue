<script setup lang="ts">
import type { SelectSeparatorProps } from 'reka-ui'
import { SelectSeparator } from 'reka-ui'

const props = defineProps<SelectSeparatorProps>()
</script>

<template>
  <SelectSeparator
    v-bind="props"
    class="ui-SelectSeparator"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectSeparator {
    @apply -mx-1 my-1 h-px bg-muted;
  }
}
</style>
