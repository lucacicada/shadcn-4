<script setup lang="ts">
import type { AlertDialogDescriptionProps } from 'reka-ui'
import { AlertDialogDescription } from 'reka-ui'

const props = defineProps<AlertDialogDescriptionProps>()
</script>

<template>
  <AlertDialogDescription
    v-bind="props"
    class="ui-AlertDialogDescription"
  >
    <slot />
  </AlertDialogDescription>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDialogDescription {
    @apply text-sm text-muted-foreground;
  }
}
</style>
