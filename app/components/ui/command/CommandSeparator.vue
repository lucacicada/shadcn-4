<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import { Separator } from 'reka-ui'

const props = defineProps<SeparatorProps>()
</script>

<template>
  <Separator
    v-bind="props"
    class="ui-CommandSeparator"
  >
    <slot />
  </Separator>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CommandSeparator {
    @apply -mx-1 h-px bg-border;
  }
}
</style>
