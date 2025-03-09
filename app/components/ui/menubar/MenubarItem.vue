<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from 'reka-ui'
import { MenubarItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<MenubarItemProps & { inset?: boolean }>()

const emits = defineEmits<MenubarItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    class="ui-MenubarItem"
    :class="inset && 'ui-MenubarItem-inset'"
  >
    <slot />
  </MenubarItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarItem {
    @apply relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
  .ui-MenubarItem-inset {
    @apply pl-8;
  }
}
</style>
