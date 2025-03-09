<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonVariants = VariantProps<typeof buttonVariants>

export const buttonVariants = cva('ui-btn', {
  variants: {
    variant: {
      default: 'ui-btn-variant-default',
      destructive: 'ui-btn-variant-destructive',
      outline: 'ui-btn-variant-outline',
      secondary: 'ui-btn-variant-secondary',
      ghost: 'ui-btn-variant-ghost',
      link: 'ui-btn-variant-link',
    },
    size: {
      default: 'ui-btn-size-default',
      xs: 'ui-btn-size-xs',
      sm: 'ui-btn-size-sm',
      lg: 'ui-btn-size-lg',
      icon: 'ui-btn-size-icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
</script>

<script setup lang="ts">
interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const { as = 'button' } = defineProps<Props>()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="buttonVariants({ variant, size })"
  >
    <slot />
  </Primitive>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-btn {
    @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;
  }

  .ui-btn-variant-default {
    @apply bg-primary text-primary-foreground shadow hover:bg-primary/90;
  }

  .ui-btn-variant-destructive {
    @apply bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90;
  }

  .ui-btn-variant-outline {
    @apply border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground;
  }

  .ui-btn-variant-secondary {
    @apply bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80;
  }

  .ui-btn-variant-ghost {
    @apply hover:bg-accent hover:text-accent-foreground;
  }

  .ui-btn-variant-link {
    @apply text-primary underline-offset-4 hover:underline;
  }

  .ui-btn-size-default {
    @apply h-9 px-4 py-2;
  }

  .ui-btn-size-xs {
    @apply h-7 rounded px-2;
  }

  .ui-btn-size-sm {
    @apply h-8 rounded-md px-3 text-xs;
  }

  .ui-btn-size-lg {
    @apply h-10 rounded-md px-8;
  }

  .ui-btn-size-icon {
    @apply h-9 w-9;
  }
}
</style>
