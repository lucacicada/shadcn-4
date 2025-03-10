<script lang="ts" setup>
import { RangeCalendarHeading, type RangeCalendarHeadingProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarHeadingProps>()

defineSlots<{
  default: (props: { headingValue: string }) => any
}>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeading
    v-slot="{ headingValue }"
    v-bind="forwardedProps"
    class="ui-RangeCalendarHeading"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarHeading {
    @apply text-sm font-medium;
  }
}
</style>
