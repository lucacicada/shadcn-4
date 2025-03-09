<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<SelectTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    class="ui-SelectTrigger"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectTrigger {
    @apply flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start;
  }
}
</style>
