<script setup lang="ts">
import type { ListboxContentProps } from 'reka-ui'
import { ListboxContent, useForwardProps } from 'reka-ui'

const props = defineProps<ListboxContentProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <ListboxContent
    v-bind="forwarded"
    class="ui-CommandList "
  >
    <div role="presentation">
      <slot />
    </div>
  </ListboxContent>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CommandList {
    @apply -mx-1 h-px bg-border;
  }
}
</style>
