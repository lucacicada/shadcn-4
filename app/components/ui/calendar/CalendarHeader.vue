<script lang="ts" setup>
import type { CalendarHeaderProps } from 'reka-ui'
import { CalendarHeader, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarHeaderProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeader
    v-bind="forwardedProps"
    class="ui-CalendarHeader"
  >
    <slot />
  </CalendarHeader>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarHeader {
    @apply relative flex w-full items-center justify-between pt-1;
  }
}
</style>
