<script lang="ts" setup>
import type { CalendarHeadingProps } from 'reka-ui'
import { CalendarHeading, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarHeadingProps>()

defineSlots<{
  default: (props: { headingValue: string }) => any
}>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    v-bind="forwardedProps"
    class="ui-CalendarHeading"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarHeading {
    @apply text-sm font-medium;
  }
}
</style>
