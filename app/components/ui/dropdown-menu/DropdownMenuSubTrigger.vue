<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'
import { DropdownMenuSubTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuSubTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    class="ui-DropdownMenuSubTrigger"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuSubTrigger {
    @apply flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent;
  }
}
</style>
