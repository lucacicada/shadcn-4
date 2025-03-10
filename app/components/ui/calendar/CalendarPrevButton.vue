<script lang="ts" setup>
import { ChevronLeft } from 'lucide-vue-next'
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarPrevProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarPrev
    v-bind="forwardedProps"
    class="CalendarPrevButton"
  >
    <slot>
      <ChevronLeft class="h-4 w-4" />
    </slot>
  </CalendarPrev>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CalendarPrevButton {
    @apply
      inline-flex
      items-center
      justify-center
      gap-2
      whitespace-nowrap
      rounded-md
      text-sm
      font-medium
      transition-colors
      focus-visible:outline-none
      focus-visible:ring-1
      focus-visible:ring-ring
      disabled:pointer-events-none
      disabled:opacity-50
      [&_svg]:pointer-events-none
      [&_svg]:size-4
      [&_svg]:shrink-0

      border
      border-input
      shadow-sm
      hover:bg-accent
      hover:text-accent-foreground

      bg-transparent
      p-0
      opacity-50
      hover:opacity-100;
  }
}
</style>
