<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { NavigationMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuTriggerProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    class="group ui-NavigationMenuTrigger"
  >
    <slot />
    <ChevronDown
      class="relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenuTrigger {
    @apply inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50;
  }
}
</style>
