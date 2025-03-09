<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from 'reka-ui'
import { NavigationMenuContent, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    class="ui-NavigationMenuContent"
  >
    <slot />
  </NavigationMenuContent>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NavigationMenuContent {
    @apply left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto;
  }
}
</style>
