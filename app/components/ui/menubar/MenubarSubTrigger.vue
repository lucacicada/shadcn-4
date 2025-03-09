<script setup lang="ts">
import type { MenubarSubTriggerProps } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'
import { MenubarSubTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarSubTriggerProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    class="ui-MenubarSubTrigger"
    :class="inset && 'ui-MenubarSubTrigger-inset'"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </MenubarSubTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarSubTrigger {
    @apply flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground;
  }
  .ui-MenubarSubTrigger-inset {
    @apply pl-8;
  }
}
</style>
