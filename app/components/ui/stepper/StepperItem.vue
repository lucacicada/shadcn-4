<script lang="ts" setup>
import type { StepperItemProps } from 'reka-ui'
import { StepperItem, useForwardProps } from 'reka-ui'

const props = defineProps<StepperItemProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    class="group ui-stepper-item"
  >
    <slot v-bind="slotProps" />
  </StepperItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-item {
    @apply flex items-center gap-2 data-[disabled]:pointer-events-none;
  }
}
</style>
