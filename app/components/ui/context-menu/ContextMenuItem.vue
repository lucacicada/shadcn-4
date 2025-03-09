<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui'
import { ContextMenuItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ContextMenuItemProps & { inset?: boolean }>()
const emits = defineEmits<ContextMenuItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    class="ui-ContextMenuItem"
    :class="inset && 'ui-ContextMenuItem-inset'"
  >
    <slot />
  </ContextMenuItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ContextMenuItem {
    @apply relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
  .ui-ContextMenuItem-inset {
    @apply pl-8;
  }
}
</style>
