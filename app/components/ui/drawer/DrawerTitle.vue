<script lang="ts" setup>
import type { DrawerTitleProps } from 'vaul-vue'
import { DrawerTitle } from 'vaul-vue'

const props = defineProps<DrawerTitleProps>()
</script>

<template>
  <DrawerTitle
    v-bind="props"
    class="ui-DrawerTitle"
  >
    <slot />
  </DrawerTitle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DrawerTitle {
    @apply text-lg font-semibold leading-none tracking-tight;
  }
}
</style>
