<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'reka-ui'
import { CalendarHeadCell, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarHeadCellProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeadCell
    class="ui-CalendarHeadCell"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarHeadCell {
    @apply w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground;
  }
}
</style>
