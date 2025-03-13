<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import { Button } from '@/components/ui/button'

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    class="ui-CarouselPrevious"
    :class="orientation === 'horizontal' ? 'ui-CarouselPrevious-horizontal' : 'ui-CarouselPrevious-vertical'"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="h-4 w-4 text-current" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CarouselPrevious {
    @apply touch-manipulation absolute h-8 w-8 rounded-full p-0;
  }
  .ui-CarouselPrevious-horizontal {
    @apply -left-12 top-1/2 -translate-y-1/2;
  }
  .ui-CarouselPrevious-vertical {
    @apply -top-12 left-1/2 -translate-x-1/2 rotate-90;
  }
}
</style>
