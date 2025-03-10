<script lang="ts" setup>
import { RangeCalendarGridRow, type RangeCalendarGridRowProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarGridRowProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarGridRow
    class="ui-RangeCalendarGridRow"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarGridRow>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarGridRow {
    @apply flex mt-2 w-full;
  }
}
</style>
