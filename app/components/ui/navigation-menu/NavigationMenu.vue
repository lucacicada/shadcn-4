<script setup lang="ts">
import type { NavigationMenuRootEmits, NavigationMenuRootProps } from 'reka-ui'
import { NavigationMenuRoot, useForwardPropsEmits } from 'reka-ui'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

const props = defineProps<NavigationMenuRootProps>()
const emits = defineEmits<NavigationMenuRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    class="ui-NavigationMenu"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenu {
    @apply relative z-10 flex max-w-max flex-1 items-center justify-center;
  }
}
</style>
