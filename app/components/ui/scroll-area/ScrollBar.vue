<script setup lang="ts">
import type { ScrollAreaScrollbarProps } from 'reka-ui'
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'reka-ui'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps>(), {
  orientation: 'vertical',
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="props"
    class="ui-scroll-bar"
    :class="props.orientation === 'vertical' ? 'ui-scroll-vertical': 'ui-scroll-horizontal'"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-scroll-bar {
    @apply flex touch-none select-none transition-colors;
  }
  .ui-scroll-vertical {
    @apply h-full w-2.5 border-l border-l-transparent p-px;
  }
  .ui-scroll-horizontal {
    @apply h-2.5 flex-col border-t border-t-transparent p-px;
  }
}
</style>
