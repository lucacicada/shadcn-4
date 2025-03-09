<script setup lang="ts">
import type { TagsInputInputProps } from 'reka-ui'
import { TagsInputInput, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputInputProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputInput
    v-bind="forwardedProps"
    class="ui-tags-input-input"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tags-input-input {
    @apply text-sm min-h-6 focus:outline-none flex-1 bg-transparent px-1;
  }
}
</style>
