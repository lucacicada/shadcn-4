<script lang="ts" setup>
import type { CalendarCellProps } from 'reka-ui'
import { CalendarCell, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarCellProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarCell
    class="ui-CalendarCell"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarCell {
    @apply relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50;
  }
}
</style>
