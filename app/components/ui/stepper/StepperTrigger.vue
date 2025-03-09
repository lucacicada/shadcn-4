<script lang="ts" setup>
import type { StepperTriggerProps } from 'reka-ui'
import { StepperTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<StepperTriggerProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    class="ui-stepper-trigger"
  >
    <slot />
  </StepperTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-trigger {
    @apply p-2 flex flex-col items-center text-center gap-2 rounded-md;
  }
}
</style>
