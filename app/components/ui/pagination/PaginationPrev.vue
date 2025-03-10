<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import { PaginationPrev, type PaginationPrevProps } from 'reka-ui'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationPrevProps>(), {
  asChild: true,
})
</script>

<template>
  <PaginationPrev v-bind="props">
    <Button
      class="ui-PaginationPrev"
      variant="outline"
    >
      <slot>
        <ChevronLeft class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PaginationPrev {
    @apply w-10 h-10 p-0;
  }
}
</style>
