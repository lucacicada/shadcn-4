<script setup lang="ts">
import type { TagsInputItemProps } from 'reka-ui'
import { TagsInputItem, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputItemProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItem
    v-bind="forwardedProps"
    class="ui-tags-input-item"
  >
    <slot />
  </TagsInputItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tags-input-item {
    @apply flex h-6 items-center rounded bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background;
  }
}
</style>
