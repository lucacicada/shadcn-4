<script setup lang="ts">
import { useCarousel } from './useCarousel'

defineOptions({
  inheritAttrs: false,
})

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div
    ref="carouselRef"
    class="overflow-hidden"
  >
    <div
      class="ui-CarouselContent"
      :class="orientation === 'horizontal' ? 'ui-CarouselContent-horizontal' : 'ui-CarouselContent-vertical'"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CarouselContent {
    @apply flex;
  }
  .ui-CarouselContent-horizontal {
    @apply -ml-4;
  }
  .ui-CarouselContent-vertical {
    @apply -mt-4 flex-col;
  }
}
</style>
