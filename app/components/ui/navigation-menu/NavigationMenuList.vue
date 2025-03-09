<script setup lang="ts">
import type { NavigationMenuListProps } from 'reka-ui'
import { NavigationMenuList, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuListProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    class="group ui-NavigationMenuList"
  >
    <slot />
  </NavigationMenuList>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenuList {
    @apply flex flex-1 list-none items-center justify-center gap-x-1;
  }
}
</style>
