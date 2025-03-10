<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from 'reka-ui'

const props = defineProps<DialogTitleProps>()
</script>

<template>
  <DialogTitle
    class="ui-SheetTitle"
    v-bind="props"
  >
    <slot />
  </DialogTitle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SheetTitle {
    @apply text-lg font-semibold text-foreground;
  }
}
</style>
