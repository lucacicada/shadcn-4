<script setup lang="ts">
import type { DropdownMenuLabelProps } from 'reka-ui'
import { DropdownMenuLabel, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuLabelProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    class="ui-DropdownMenuLabel"
    :class="inset && 'ui-DropdownMenuLabel-inset'"
  >
    <slot />
  </DropdownMenuLabel>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuLabel {
    @apply px-2 py-1.5 text-sm font-semibold;
  }
  .ui-DropdownMenuLabel-inset {
    @apply pl-8;
  }
}
</style>
