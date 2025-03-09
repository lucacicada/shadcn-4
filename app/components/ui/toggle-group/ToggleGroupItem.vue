<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { ToggleGroupItemProps } from 'reka-ui'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { inject } from 'vue'
import { toggleVariants } from '../toggle/Toggle.vue'

type ToggleGroupVariants = VariantProps<typeof toggleVariants>

const props = defineProps<ToggleGroupItemProps & {
  variant?: ToggleGroupVariants['variant']
  size?: ToggleGroupVariants['size']
}>()

const context = inject<ToggleGroupVariants>('toggleGroup')

const forwardedProps = useForwardProps(props)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="toggleVariants({
      variant: context?.variant || variant,
      size: context?.size || size,
    })"
  >
    <slot />
  </ToggleGroupItem>
</template>
