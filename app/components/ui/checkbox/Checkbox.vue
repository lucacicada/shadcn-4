<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    class="peer ui-checkbox"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
      <slot>
        <Check class="size-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-checkbox {
    @apply size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground;
  }
}
</style>
