<script lang="ts" setup>
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarCellTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarCellTrigger
    v-bind="forwardedProps"
    class="ui-RangeCalendarCellTrigger"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-RangeCalendarCellTrigger {
    @apply
      inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
      h-9 w-9 p-0 data-[selected]:opacity-100
      [&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground
      data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground
      data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground
      data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30
      data-[disabled]:text-muted-foreground data-[disabled]:opacity-50
      data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through;
  }
}
</style>
