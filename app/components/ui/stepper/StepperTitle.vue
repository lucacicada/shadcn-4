<script lang="ts" setup>
import type { StepperTitleProps } from 'reka-ui'
import { StepperTitle, useForwardProps } from 'reka-ui'

const props = defineProps<StepperTitleProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <StepperTitle
    v-bind="forwarded"
    class="ui-stepper-title"
  >
    <slot />
  </StepperTitle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper-title {
    @apply p-2 flex flex-col items-center text-center gap-2 rounded-md;
  }
}
</style>
