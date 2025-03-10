<script lang="ts" setup>
import { RangeCalendarGrid, type RangeCalendarGridProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarGridProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarGrid
    v-bind="forwardedProps"
    class="ui-RangeCalendarGrid"
  >
    <slot />
  </RangeCalendarGrid>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarGrid {
    @apply w-full border-collapse space-y-1;
  }
}
</style>
