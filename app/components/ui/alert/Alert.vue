<script lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export type AlertVariants = VariantProps<typeof alertVariants>

export const alertVariants = cva('ui-alert', {
  variants: {
    variant: {
      default: 'ui-alert-default',
      destructive: 'ui-alert-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
</script>

<script setup lang="ts">
defineProps<{ variant?: AlertVariants['variant'] }>()
</script>

<template>
  <div
    role="alert"
    :class="alertVariants({ variant })"
  >
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-alert {
    @apply
      relative
      w-full
      rounded-lg
      border
      p-4
      [&>svg~*]:pl-7
      [&>svg+div]:translate-y-[-3px]
      [&>svg]:absolute
      [&>svg]:left-4
      [&>svg]:top-4
      [&>svg]:text-foreground;
  }

  .ui-alert-default {
    @apply
    bg-background
    text-foreground;
  }

  .ui-alert-destructive {
    @apply
      border-destructive/50
      text-destructive
      [&>svg]:text-destructive;
  }
}
</style>
