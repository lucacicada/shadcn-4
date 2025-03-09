<script setup lang="ts">
import type { ProgressRootProps } from 'reka-ui'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'

const props = defineProps<ProgressRootProps>()
</script>

<template>
  <ProgressRoot
    v-bind="props"
    class="ui-progress"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-progress {
    @apply relative h-2 w-full overflow-hidden rounded-full bg-primary/20;
  }
}
</style>
