<script setup lang="ts">
import type { NumberFieldRootEmits, NumberFieldRootProps } from 'reka-ui'
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NumberFieldRootProps>()
const emits = defineEmits<NumberFieldRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NumberFieldRoot
    v-bind="forwarded"
    class="ui-NumberField"
  >
    <slot />
  </NumberFieldRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NumberField {
    @apply grid gap-1.5;
  }
}
</style>
