<script setup lang="ts">
import type { SelectLabelProps } from 'reka-ui'
import { SelectLabel } from 'reka-ui'

const props = defineProps<SelectLabelProps>()
</script>

<template>
  <SelectLabel
    v-bind="props"
    class="ui-SelectLabel"
  >
    <slot />
  </SelectLabel>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectLabel {
    @apply py-1.5 pl-8 pr-2 text-sm font-semibold;
  }
}
</style>
