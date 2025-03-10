<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'reka-ui'
import { ComboboxSeparator } from 'reka-ui'

const props = defineProps<ComboboxSeparatorProps>()
</script>

<template>
  <ComboboxSeparator
    v-bind="props"
    class="ui-ComboboxSeparator"
  >
    <slot />
  </ComboboxSeparator>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ComboboxSeparator {
    @apply -mx-1 h-px bg-border;
  }
}
</style>
