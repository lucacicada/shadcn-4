<script lang="ts" setup>
import { RangeCalendarHeadCell, type RangeCalendarHeadCellProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarHeadCellProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeadCell
    class="ui-RangeCalendarHeadCell"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarHeadCell>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarHeadCell {
    @apply w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground;
  }
}
</style>
