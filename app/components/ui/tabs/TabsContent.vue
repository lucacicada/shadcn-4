<script setup lang="ts">
import type { TabsContentProps } from 'reka-ui'
import { TabsContent } from 'reka-ui'

const props = defineProps<TabsContentProps>()
</script>

<template>
  <TabsContent
    v-bind="props"
    class="ui-tabs-content "
  >
    <slot />
  </TabsContent>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-tabs-content {
    @apply mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
  }
}
</style>
