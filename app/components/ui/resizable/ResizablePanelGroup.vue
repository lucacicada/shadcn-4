<script setup lang="ts">
import type { SplitterGroupEmits, SplitterGroupProps } from 'reka-ui'
import { SplitterGroup, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SplitterGroupProps>()
const emits = defineEmits<SplitterGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterGroup
    v-bind="forwarded"
    class="ui-resizable-panel-group"
  >
    <slot />
  </SplitterGroup>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-resizable-panel-group {
    @apply flex h-full w-full data-[panel-group-direction=vertical]:flex-col;
  }
}
</style>
