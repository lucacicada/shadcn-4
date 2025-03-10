<script lang="ts" setup>
import { RangeCalendarHeader, type RangeCalendarHeaderProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarHeaderProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeader
    class="ui-RangeCalendarHeader"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarHeader>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarHeader {
    @apply relative flex w-full items-center justify-between pt-1;
  }
}
</style>
