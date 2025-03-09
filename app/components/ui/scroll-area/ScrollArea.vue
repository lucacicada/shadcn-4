<script setup lang="ts">
import type { ScrollAreaRootProps } from 'reka-ui'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'reka-ui'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<ScrollAreaRootProps>()
</script>

<template>
  <ScrollAreaRoot
    v-bind="props"
    class="ui-scroll-area"
  >
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-scroll-area {
    @apply relative overflow-hidden;
  }
}
</style>
