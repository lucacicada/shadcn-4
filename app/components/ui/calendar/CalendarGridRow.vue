<script lang="ts" setup>
import type { CalendarGridRowProps } from 'reka-ui'
import { CalendarGridRow, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarGridRowProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarGridRow
    class="ui-CalendarGridRow"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGridRow>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarGridRow {
    @apply flex;
  }
}
</style>
