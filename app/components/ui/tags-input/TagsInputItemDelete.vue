<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import { X } from 'lucide-vue-next'
import { TagsInputItemDelete, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputItemDeleteProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    class="ui-tags-input-item-delete"
  >
    <slot>
      <X class="w-4 h-4" />
    </slot>
  </TagsInputItemDelete>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tags-input-item-delete {
    @apply flex rounded bg-transparent mr-1;
  }
}
</style>
