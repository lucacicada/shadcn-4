<script setup lang="ts">
import type { SelectScrollDownButtonProps } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { SelectScrollDownButton, useForwardProps } from 'reka-ui'

const props = defineProps<SelectScrollDownButtonProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    class="ui-SelectScrollDownButton"
  >
    <slot>
      <ChevronDown class="h-4 w-4" />
    </slot>
  </SelectScrollDownButton>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectScrollDownButton {
    @apply flex cursor-default items-center justify-center py-1;
  }
}
</style>
