<script setup lang="ts">
import type { DropdownMenuItemProps } from 'reka-ui'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuItemProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    class="ui-DropdownMenuItem"
    :class="inset && 'ui-DropdownMenuItem-inset'"
  >
    <slot />
  </DropdownMenuItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuItem {
    @apply relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0;
  }
  .ui-DropdownMenuItem-inset {
    @apply pl-8;
  }
}
</style>
