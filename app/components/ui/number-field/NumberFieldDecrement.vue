<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'reka-ui'
import { Minus } from 'lucide-vue-next'
import { NumberFieldDecrement, useForwardProps } from 'reka-ui'

const props = defineProps<NumberFieldDecrementProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    class="ui-NumberFieldDecrement"
  >
    <slot>
      <Minus class="h-4 w-4" />
    </slot>
  </NumberFieldDecrement>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NumberFieldDecrement {
    @apply absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20;
  }
}
</style>
