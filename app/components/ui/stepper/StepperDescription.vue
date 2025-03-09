<script lang="ts" setup>
import type { StepperDescriptionProps } from 'reka-ui'
import { StepperDescription, useForwardProps } from 'reka-ui'

const props = defineProps<StepperDescriptionProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperDescription
    v-slot="slotProps"
    v-bind="forwarded"
    class="ui-stepper-description"
  >
    <slot v-bind="slotProps" />
  </StepperDescription>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-description {
    @apply text-xs text-muted-foreground;
  }
}
</style>
