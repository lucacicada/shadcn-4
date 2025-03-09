<script setup lang="ts">
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<RadioGroupRootProps>()
const emits = defineEmits<RadioGroupRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupRoot
    v-bind="forwarded"
    class="ui-radio-group"
  >
    <slot />
  </RadioGroupRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-radio-group {
    @apply grid gap-2;
  }
}
</style>
