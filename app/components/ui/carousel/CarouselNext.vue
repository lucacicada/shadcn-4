<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import { Button } from '@/components/ui/button'

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    class="ui-CarouselNext"
    :class="orientation === 'horizontal' ? 'ui-CarouselNext-horizontal' : 'ui-CarouselNext-vertical'"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="h-4 w-4 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CarouselNext {
    @apply touch-manipulation absolute h-8 w-8 rounded-full p-0;
  }
  .ui-CarouselNext-horizontal {
    @apply -right-12 top-1/2 -translate-y-1/2;
  }
  .ui-CarouselNext-vertical {
    @apply -bottom-12 left-1/2 -translate-x-1/2 rotate-90;
  }
}
</style>
