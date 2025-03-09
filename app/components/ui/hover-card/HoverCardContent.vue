<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  sideOffset: 4,
})

const forwarded = useForwardProps(props)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="{ ...forwarded, ...$attrs }"
      class="ui-hover-card-content"
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-hover-card-content {
    @apply z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2;
  }
}
</style>
