<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'

const props = defineProps<LabelProps>()
</script>

<template>
  <Label
    v-bind="props"
    class="ui-label"
  >
    <slot />
  </Label>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-label {
    @apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;
  }
}
</style>
