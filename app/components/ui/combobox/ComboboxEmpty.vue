<script setup lang="ts">
import type { ComboboxEmptyProps } from 'reka-ui'
import { ComboboxEmpty } from 'reka-ui'

const props = defineProps<ComboboxEmptyProps>()
</script>

<template>
  <ComboboxEmpty
    v-bind="props"
    class="ui-ComboboxEmpty"
  >
    <slot />
  </ComboboxEmpty>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ComboboxEmpty {
    @apply py-6 text-center text-sm;
  }
}
</style>
