<script lang="ts" setup>
import type { StepperRootEmits, StepperRootProps } from 'reka-ui'
import { StepperRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<StepperRootProps>()
const emits = defineEmits<StepperRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <StepperRoot
    v-slot="slotProps"
    class="ui-stepper"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps" />
  </StepperRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-stepper {
    @apply flex gap-2;
  }
}
</style>
