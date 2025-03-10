<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from 'reka-ui'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxInputProps>()

const emits = defineEmits<ComboboxInputEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    class="ui-ComboboxInput"
  >
    <slot />
  </ComboboxInput>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ComboboxInput {
    @apply flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50;
  }
}
</style>
