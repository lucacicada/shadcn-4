<script setup lang="ts">
import type { PinInputRootEmits, PinInputRootProps } from 'reka-ui'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<PinInputRootProps>(), {
  modelValue: () => [],
})
const emits = defineEmits<PinInputRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    class="ui-PinInput"
  >
    <slot />
  </PinInputRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PinInput {
    @apply flex gap-2 items-center;
  }
}
</style>
