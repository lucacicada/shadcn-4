<script  lang="ts">
import { AvatarRoot } from 'reka-ui'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export type AvatarVariants = VariantProps<typeof avatarVariants>

export const avatarVariants = cva('ui-avatar', {
  variants: {
    size: {
      sm: 'ui-avatar-sm',
      base: 'ui-avatar-base',
      lg: 'ui-avatar-lg',
    },
    shape: {
      circle: 'ui-avatar-circle',
      square: 'ui-avatar-square',
    },
  },
  defaultVariants: {
    size: 'sm',
    shape: 'circle',
  },
})
</script>

<script setup lang="ts">
defineProps<{
  size?: AvatarVariants['size']
  shape?: AvatarVariants['shape']
}>()
</script>

<template>
  <AvatarRoot :class="avatarVariants({ size, shape })">
    <slot />
  </AvatarRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-avatar {
    @apply inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden;
  }
  .ui-avatar-sm {
    @apply h-10 w-10 text-xs;
  }
  .ui-avatar-base {
    @apply h-16 w-16 text-2xl;
  }
  .ui-avatar-lg {
    @apply h-32 w-32 text-5xl;
  }
  .ui-avatar-circle {
    @apply rounded-full;
  }
  .ui-avatar-square {
    @apply rounded-md;
  }
}
</style>
