<script setup lang="ts">
import { ChevronsRight } from 'lucide-vue-next'
import { PaginationLast, type PaginationLastProps } from 'reka-ui'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationLastProps>(), {
  asChild: true,
})
</script>

<template>
  <PaginationLast v-bind="props">
    <Button
      class="ui-PaginationLast"
      variant="outline"
    >
      <slot>
        <ChevronsRight class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationLast>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PaginationLast {
    @apply w-10 h-10 p-0;
  }
}
</style>
