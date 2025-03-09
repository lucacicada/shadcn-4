<script setup lang="ts">
import type { ContextMenuLabelProps } from 'reka-ui'
import { ContextMenuLabel } from 'reka-ui'

const props = defineProps<ContextMenuLabelProps & { inset?: boolean }>()
</script>

<template>
  <ContextMenuLabel
    v-bind="props"
    class="ui-ContextMenuLabel"
    :class="inset && 'ui-ContextMenuLabel-inset'"
  >
    <slot />
  </ContextMenuLabel>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ContextMenuLabel {
    @apply px-2 py-1.5 text-sm font-semibold text-foreground;
  }
  .ui-ContextMenuLabel-inset {
    @apply pl-8;
  }
}
</style>
