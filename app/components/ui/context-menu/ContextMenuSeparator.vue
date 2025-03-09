<script setup lang="ts">
import type { ContextMenuSeparatorProps } from 'reka-ui'
import { ContextMenuSeparator } from 'reka-ui'

const props = defineProps<ContextMenuSeparatorProps>()
</script>

<template>
  <ContextMenuSeparator
    v-bind="props"
    class="ui-ContextMenuSeparator"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ContextMenuSeparator {
    @apply -mx-1 my-1 h-px bg-border;
  }
}
</style>
