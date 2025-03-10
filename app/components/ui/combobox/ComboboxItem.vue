<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'reka-ui'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    class="ui-ComboboxItem"
  >
    <slot />
  </ComboboxItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ComboboxItem {
    @apply relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0;
  }
}
</style>
