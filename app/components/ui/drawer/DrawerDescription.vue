<script lang="ts" setup>
import type { DrawerDescriptionProps } from 'vaul-vue'
import { DrawerDescription } from 'vaul-vue'

const props = defineProps<DrawerDescriptionProps>()
</script>

<template>
  <DrawerDescription
    v-bind="props"
    class="ui-DrawerDescription"
  >
    <slot />
  </DrawerDescription>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DrawerDescription {
    @apply text-sm text-muted-foreground;
  }
}
</style>
