<script setup lang="ts">
import { useCarousel } from './useCarousel'

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    class="ui-CarouselItem"
    :class="orientation === 'horizontal' ? 'ui-CarouselItem-horizontal' : 'ui-CarouselItem-vertical'"
  >
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CarouselItem {
    @apply min-w-0 shrink-0 grow-0 basis-full;
  }
  .ui-CarouselItem-horizontal {
    @apply pl-4;
  }
  .ui-CarouselItem-vertical {
    @apply pt-4;
  }
}
</style>
