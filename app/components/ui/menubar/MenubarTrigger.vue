<script setup lang="ts">
import type { MenubarTriggerProps } from 'reka-ui'
import { MenubarTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    class="ui-MenubarTrigger"
  >
    <slot />
  </MenubarTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarTrigger {
    @apply flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground;
  }
}
</style>
