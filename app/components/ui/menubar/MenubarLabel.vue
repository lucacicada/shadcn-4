<script setup lang="ts">
import type { MenubarLabelProps } from 'reka-ui'
import { MenubarLabel } from 'reka-ui'

const props = defineProps<MenubarLabelProps & { inset?: boolean }>()
</script>

<template>
  <MenubarLabel
    v-bind="props"
    class="ui-MenubarLabel"
    :class="inset && 'ui-MenubarLabel-inset'"
  >
    <slot />
  </MenubarLabel>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarLabel {
    @apply px-2 py-1.5 text-sm font-semibold;
  }
  .ui-MenubarLabel-inset {
    @apply pl-8;
  }
}
</style>
