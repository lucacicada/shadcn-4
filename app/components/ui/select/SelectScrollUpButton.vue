<script setup lang="ts">
import type { SelectScrollUpButtonProps } from 'reka-ui'
import { ChevronUp } from 'lucide-vue-next'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'

const props = defineProps<SelectScrollUpButtonProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    class="ui-SelectScrollUpButton"
  >
    <slot>
      <ChevronUp class="h-4 w-4" />
    </slot>
  </SelectScrollUpButton>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectScrollUpButton {
    @apply flex cursor-default items-center justify-center py-1;
  }
}
</style>
