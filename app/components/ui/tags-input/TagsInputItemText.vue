<script setup lang="ts">
import type { TagsInputItemTextProps } from 'reka-ui'
import { TagsInputItemText, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputItemTextProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItemText
    v-bind="forwardedProps"
    class="ui-tags-input-item-text"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tags-input-item-text {
    @apply py-1 px-2 text-sm rounded bg-transparent;
  }
}
</style>
