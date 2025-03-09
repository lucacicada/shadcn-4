<script lang="ts" setup>
import type { StepperSeparatorProps } from 'reka-ui'
import { StepperSeparator, useForwardProps } from 'reka-ui'

const props = defineProps<StepperSeparatorProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    class="ui-stepper-separator"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-separator {
    @apply
    bg-muted
    group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50
    group-data-[state=completed]:bg-accent-foreground;
  }
}
</style>
