<script setup lang="ts">
import type { DropdownMenuContentEmits, DropdownMenuContentProps } from 'reka-ui'
import { DropdownMenuContent, DropdownMenuPortal, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  sideOffset: 4,
})

const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="{ ...forwarded, ...$attrs }"
      class="ui-DropdownMenuContent"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuContent {
    @apply z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2;
  }
}
</style>
