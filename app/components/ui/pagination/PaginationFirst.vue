<script setup lang="ts">
import { ChevronsLeft } from 'lucide-vue-next'
import { PaginationFirst, type PaginationFirstProps } from 'reka-ui'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationFirstProps>(), {
  asChild: true,
})
</script>

<template>
  <PaginationFirst v-bind="props">
    <Button
      class="ui-PaginationFirst"
      variant="outline"
    >
      <slot>
        <ChevronsLeft class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationFirst>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PaginationFirst {
    @apply w-10 h-10 p-0;
  }
}
</style>
