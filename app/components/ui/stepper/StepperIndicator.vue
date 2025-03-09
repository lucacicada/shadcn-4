<script lang="ts" setup>
import type { StepperIndicatorProps } from 'reka-ui'
import { StepperIndicator, useForwardProps } from 'reka-ui'

const props = defineProps<StepperIndicatorProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    class="ui-stepper-indicator"
  >
    <slot />
  </StepperIndicator>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-indicator {
    @apply
      inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-10 h-10
    group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50
    group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground
    group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground;
  }
}
</style>
