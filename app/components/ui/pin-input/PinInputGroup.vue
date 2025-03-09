<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    class="ui-PinInputGroup"
  >
    <slot />
  </primitive>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PinInputGroup {
    @apply flex items-center;
  }
}
</style>
