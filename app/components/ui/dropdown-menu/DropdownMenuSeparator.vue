<script setup lang="ts">
import type { DropdownMenuSeparatorProps } from 'reka-ui'
import { DropdownMenuSeparator } from 'reka-ui'

const props = defineProps<DropdownMenuSeparatorProps>()
</script>

<template>
  <DropdownMenuSeparator
    v-bind="props"
    class="ui-DropdownMenuSeparator"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuSeparator {
    @apply -mx-1 my-1 h-px bg-muted;
  }
}
</style>
