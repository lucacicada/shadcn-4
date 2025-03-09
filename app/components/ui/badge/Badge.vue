<script  lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export type BadgeVariants = VariantProps<typeof badgeVariants>

export const badgeVariants = cva('ui-badge', {
  variants: {
    variant: {
      default: 'ui-badge-default',
      secondary: 'ui-badge-secondary',
      destructive: 'ui-badge-destructive',
      outline: 'ui-badge-outline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
</script>

<script setup lang="ts">
defineProps<{ variant?: BadgeVariants['variant'] }>()
</script>

<template>
  <div :class="badgeVariants({ variant })">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-badge {
    @apply inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
  }
  .ui-badge-default {
    @apply border-transparent bg-primary text-primary-foreground hover:bg-primary/80;
  }
  .ui-badge-secondary {
    @apply border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80;
  }
  .ui-badge-destructive {
    @apply border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80;
  }
  .ui-badge-outline {
    @apply text-foreground;
  }
}
</style>
