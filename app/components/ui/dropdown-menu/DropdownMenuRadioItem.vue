<script setup lang="ts">
import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from 'reka-ui'
import { Circle } from 'lucide-vue-next'
import { DropdownMenuItemIndicator, DropdownMenuRadioItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    class="ui-DropdownMenuRadioItem"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Circle class="h-2 w-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuRadioItem {
    @apply relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
}
</style>
