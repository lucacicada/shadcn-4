<script setup lang="ts">
import type { DropdownMenuTriggerProps } from 'reka-ui'
import { DropdownMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    v-bind="forwardedProps"
    class="ui-DropdownMenuTrigger"
  >
    <slot />
  </DropdownMenuTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuTrigger {
    @apply outline-none;
  }
}
</style>
