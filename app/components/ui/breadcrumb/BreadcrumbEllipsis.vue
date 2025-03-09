<script lang="ts" setup>
import { MoreHorizontal } from 'lucide-vue-next'
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    class="ui-BreadcrumbEllipsis"
  >
    <slot>
      <MoreHorizontal class="h-4 w-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbEllipsis {
    @apply flex h-9 w-9 items-center justify-center;
  }
}
</style>
