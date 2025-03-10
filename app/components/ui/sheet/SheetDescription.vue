<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from 'reka-ui'

const props = defineProps<DialogDescriptionProps>()
</script>

<template>
  <DialogDescription
    v-bind="props"
    class="ui-SheetDescription"
  >
    <slot />
  </DialogDescription>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SheetDescription {
    @apply text-sm text-muted-foreground;
  }
}
</style>
