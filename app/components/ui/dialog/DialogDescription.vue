<script setup lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import { DialogDescription, useForwardProps } from 'reka-ui'

const props = defineProps<DialogDescriptionProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    class="ui-dialog-description"
  >
    <slot />
  </DialogDescription>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-dialog-description {
    @apply text-sm text-muted-foreground;
  }
}
</style>
