<script setup lang="ts">
import type { MenubarSeparatorProps } from 'reka-ui'
import { MenubarSeparator, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarSeparatorProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <MenubarSeparator
    v-bind="forwardedProps"
    class="ui-MenubarSeparator"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarSeparator {
    @apply -mx-1 my-1 h-px bg-muted;
  }
}
</style>
