<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<AccordionContentProps>()
</script>

<template>
  <AccordionContent
    v-bind="props"
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div
      class="ui-AccordionContent"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </AccordionContent>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AccordionContent {
    @apply pb-4 pt-0;
  }
}
</style>
