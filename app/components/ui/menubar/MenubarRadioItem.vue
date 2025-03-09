<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'reka-ui'
import { Circle } from 'lucide-vue-next'
import { MenubarItemIndicator, MenubarRadioItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<MenubarRadioItemProps>()
const emits = defineEmits<MenubarRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    class="ui-MenubarRadioItem"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Circle class="h-2 w-2 fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarRadioItem {
    @apply relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
}
</style>
