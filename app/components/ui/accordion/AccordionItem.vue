<script setup lang="ts">
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'

const props = defineProps<AccordionItemProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    class="ui-AccordionItem"
  >
    <slot />
  </AccordionItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AccordionItem {
    @apply border-b;
  }
}
</style>
