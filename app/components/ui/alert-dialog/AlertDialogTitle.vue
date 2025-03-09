<script setup lang="ts">
import type { AlertDialogTitleProps } from 'reka-ui'
import { AlertDialogTitle } from 'reka-ui'

const props = defineProps<AlertDialogTitleProps>()
</script>

<template>
  <AlertDialogTitle
    v-bind="props"
    class="ui-AlertDialogTitle"
  >
    <slot />
  </AlertDialogTitle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDialogTitle {
    @apply text-lg font-semibold;
  }
}
</style>
