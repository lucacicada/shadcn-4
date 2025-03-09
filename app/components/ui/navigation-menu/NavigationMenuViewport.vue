<script setup lang="ts">
import type { NavigationMenuViewportProps } from 'reka-ui'
import { NavigationMenuViewport, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuViewportProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <div class="absolute left-0 flex justify-center top-full">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      class="NavigationMenuViewport"
    />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenuViewport {
    @apply origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width];
  }
}
</style>
