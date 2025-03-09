<script setup lang="ts">
import type { DialogTitleProps } from 'reka-ui'
import { DialogTitle, useForwardProps } from 'reka-ui'

const props = defineProps<DialogTitleProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    class="ui-dialog-title"
  >
    <slot />
  </DialogTitle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-dialog-title {
    @apply text-lg font-semibold leading-none tracking-tight;
  }
}
</style>
