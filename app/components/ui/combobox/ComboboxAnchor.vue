<script setup lang="ts">
import type { ComboboxAnchorProps } from 'reka-ui'
import { ComboboxAnchor, useForwardProps } from 'reka-ui'

const props = defineProps<ComboboxAnchorProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <ComboboxAnchor
    v-bind="forwarded"
    class="ui-ComboboxAnchor"
  >
    <slot />
  </ComboboxAnchor>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ComboboxAnchor {
    @apply w-[200px];
  }
}
</style>
