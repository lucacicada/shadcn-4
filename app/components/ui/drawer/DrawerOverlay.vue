<script lang="ts" setup>
import type { DialogOverlayProps } from 'reka-ui'
import { DrawerOverlay } from 'vaul-vue'

const props = defineProps<DialogOverlayProps>()
</script>

<template>
  <DrawerOverlay
    v-bind="props"
    class="ui-DrawerOverlay"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DrawerOverlay {
    @apply fixed inset-0 z-50 bg-black/80;
  }
}
</style>
