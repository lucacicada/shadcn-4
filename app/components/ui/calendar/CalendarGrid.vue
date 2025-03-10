<script lang="ts" setup>
import type { CalendarGridProps } from 'reka-ui'
import { CalendarGrid, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarGridProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarGrid
    class="ui-CalendarGrid"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGrid>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarGrid {
    @apply w-full border-collapse space-y-1;
  }
}
</style>
