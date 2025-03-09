<script setup lang="ts">
import type { PinInputInputProps } from 'reka-ui'
import { PinInputInput, useForwardProps } from 'reka-ui'

const props = defineProps<PinInputInputProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <PinInputInput
    v-bind="forwardedProps"
    class="ui-PinInputInput"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PinInputInput {
    @apply relative text-center focus:outline-none focus:ring-2 focus:ring-ring focus:relative focus:z-10 flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md;
  }
}
</style>
