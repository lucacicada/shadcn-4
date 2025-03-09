<script setup lang="ts">
import type { SelectItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Check } from 'lucide-vue-next'
import { SelectItem, SelectItemIndicator, SelectItemText, useForwardProps } from 'reka-ui'

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    class="ui-SelectItem"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check class="h-4 w-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectItem {
    @apply relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50;
  }
}
</style>
