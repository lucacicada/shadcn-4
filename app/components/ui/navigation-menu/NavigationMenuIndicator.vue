<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from 'reka-ui'
import { NavigationMenuIndicator, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuIndicatorProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    class="ui-NavigationMenuIndicator"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicator>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenuIndicator {
    @apply top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in;
  }
}
</style>
