<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    class="ui-BreadcrumbSeparator"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbSeparator {
    @apply [&>svg]:w-3.5 [&>svg]:h-3.5;
  }
}
</style>
