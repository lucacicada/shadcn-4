<script setup lang="ts">
import type { SelectContentEmits, SelectContentProps } from 'reka-ui'
import { SelectContent, SelectPortal, SelectViewport, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectContentProps>(), {
  position: 'popper',
})
const emits = defineEmits<SelectContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      class="ui-SelectContent"
      :class="position === 'popper' && 'ui-SelectContent-popper'"
    >
      <SelectScrollUpButton />
      <SelectViewport
        class="p-1"
        :class=" position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]'"
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectContent {
    @apply relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2;
  }
  .ui-SelectContent-popper {
    @apply data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1;
  }
}
</style>
