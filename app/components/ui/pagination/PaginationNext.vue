<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { PaginationNext, type PaginationNextProps } from 'reka-ui'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationNextProps>(), {
  asChild: true,
})
</script>

<template>
  <PaginationNext v-bind="props">
    <Button
      class="ui-PaginationNext"
      variant="outline"
    >
      <slot>
        <ChevronRight class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationNext>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PaginationNext {
    @apply w-10 h-10 p-0;
  }
}
</style>
