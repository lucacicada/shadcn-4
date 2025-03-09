<script setup lang="ts">
import type { ContextMenuSubTriggerProps } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'
import { ContextMenuSubTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuSubTriggerProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    class="ui-ContextMenuSubTrigger"
    :class="inset && 'ui-ContextMenuSubTrigger-inset'"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </ContextMenuSubTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ContextMenuSubTrigger {
    @apply flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground;
  }
  .ui-ContextMenuSubTrigger-inset {
    @apply pl-8;
  }
}
</style>
