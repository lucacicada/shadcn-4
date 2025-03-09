<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = defineProps<TabsListProps>()
</script>

<template>
  <TabsList
    v-bind="props"
    class="ui-tabs-list"
  >
    <slot />
  </TabsList>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tabs-list {
    @apply inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground;
  }
}
</style>
