<script lang="ts">
import type { ToggleEmits, ToggleProps } from 'reka-ui'
import { Toggle, useForwardPropsEmits } from 'reka-ui'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export type ToggleVariants = VariantProps<typeof toggleVariants>

export const toggleVariants = cva('ui-toggle', {
  variants: {
    variant: {
      default: 'ui-toggle-default',
      outline: 'ui-toggle-outline',
    },
    size: {
      default: 'ui-toggle-size-default',
      sm: 'ui-toggle-sm',
      lg: 'ui-toggle-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
</script>

<script setup lang="ts">
interface Props extends ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}

const { variant = 'default', size = 'default', ...props } = defineProps<Props>()
const emits = defineEmits<ToggleEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="toggleVariants({ variant, size })"
  >
    <slot />
  </Toggle>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-toggle {
    @apply inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground;
  }

  .ui-toggle-default {
    @apply bg-transparent;
  }

  .ui-toggle-outline {
    @apply border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground;
  }

  .ui-toggle-size-default {
    @apply h-9 px-3;
  }

  .ui-toggle-sm {
    @apply h-8 px-2;
  }

  .ui-toggle-lg {
    @apply h-10 px-3;
  }
}
</style>
