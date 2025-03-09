<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'reka-ui'
import { Plus } from 'lucide-vue-next'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'

const props = defineProps<NumberFieldIncrementProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    class="ui-NumberFieldIncrement"
  >
    <slot>
      <Plus class="h-4 w-4" />
    </slot>
  </NumberFieldIncrement>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NumberFieldIncrement {
    @apply absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3;
  }
}
</style>
