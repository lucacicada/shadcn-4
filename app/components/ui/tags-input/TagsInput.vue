<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'reka-ui'
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TagsInputRootProps>()
const emits = defineEmits<TagsInputRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TagsInputRoot
    v-bind="forwarded"
    class="ui-tags-input"
  >
    <slot />
  </TagsInputRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tags-input {
    @apply flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-3 py-2 text-sm;
  }
}
</style>
