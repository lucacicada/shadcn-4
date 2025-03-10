<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import type { PaginationEllipsisProps } from 'reka-ui'
import { PaginationEllipsis } from 'reka-ui'

const props = defineProps<PaginationEllipsisProps>()
</script>

<template>
  <PaginationEllipsis
    v-bind="props"
    class="ui-PaginationEllipsis"
  >
    <slot>
      <MoreHorizontal />
    </slot>
  </PaginationEllipsis>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-PaginationEllipsis {
    @apply w-9 h-9 flex items-center justify-center;
  }
}
</style>
