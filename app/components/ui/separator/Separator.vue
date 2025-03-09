<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import { Separator } from 'reka-ui'

const props = defineProps<SeparatorProps & { label?: string }>()
</script>

<template>
  <Separator
    v-bind="props"
    class="ui-separator"
    :class="props.orientation === 'vertical' ? 'ui-separator-vertical' : 'ui-separator-horizontal'"
  >
    <span
      v-if="props.label"
      class="text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      :class="props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] py-1 px-2'"
    >{{ props.label }}</span>
  </Separator>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-separator {
    @apply shrink-0 bg-border relative;
  }
  .ui-separator-vertical {
    @apply w-px h-full;
  }
  .ui-separator-horizontal {
    @apply h-px w-full;
  }
}
</style>
