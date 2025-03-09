<script setup lang="ts">
import type { MenubarCheckboxItemEmits, MenubarCheckboxItemProps } from 'reka-ui'
import { Check } from 'lucide-vue-next'
import { MenubarCheckboxItem, MenubarItemIndicator, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<MenubarCheckboxItemProps>()
const emits = defineEmits<MenubarCheckboxItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    class="ui-MenubarCheckboxItem"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Check class="w-4 h-4" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarCheckboxItem {
    @apply relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
}
</style>
