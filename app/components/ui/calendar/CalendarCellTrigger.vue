<script lang="ts" setup>
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarCellTriggerProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarCellTrigger
    class="ui-CalendarCellTrigger"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarCellTrigger {
    @apply
      inline-flex
      items-center
      justify-center
      gap-2
      whitespace-nowrap
      rounded-md
      text-sm
      transition-colors
      focus-visible:outline-none
      focus-visible:ring-1
      focus-visible:ring-ring
      disabled:pointer-events-none
      disabled:opacity-50
      [&_svg]:pointer-events-none
      [&_svg]:size-4
      [&_svg]:shrink-0

      hover:bg-accent
      hover:text-accent-foreground

      h-9
      w-9
      p-0
      font-normal

      [&[data-today]:not([data-selected])]:bg-accent
      [&[data-today]:not([data-selected])]:text-accent-foreground

      data-[selected]:bg-primary
      data-[selected]:text-primary-foreground
      data-[selected]:opacity-100
      data-[selected]:hover:bg-primary
      data-[selected]:hover:text-primary-foreground
      data-[selected]:focus:bg-primary
      data-[selected]:focus:text-primary-foreground

      data-[disabled]:text-muted-foreground
      data-[disabled]:opacity-50

      data-[unavailable]:text-destructive-foreground
      data-[unavailable]:line-through

      data-[outside-view]:text-muted-foreground
      data-[outside-view]:opacity-50
      [&[data-outside-view][data-selected]]:bg-accent/50
      [&[data-outside-view][data-selected]]:text-muted-foreground
      [&[data-outside-view][data-selected]]:opacity-30;
  }
}
</style>
