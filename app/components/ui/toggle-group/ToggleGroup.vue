<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { provide } from 'vue'
import type { ToggleVariants } from '../toggle/Toggle.vue'

export type ToggleGroupVariants = ToggleVariants

const props = defineProps<ToggleGroupRootProps & {
  variant?: ToggleGroupVariants['variant']
  size?: ToggleGroupVariants['size']
}>()

const emits = defineEmits<ToggleGroupRootEmits>()

provide('toggleGroup', {
  variant: props.variant,
  size: props.size,
})

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    class="ui-ToggleGroup"
  >
    <slot />
  </ToggleGroupRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ToggleGroup {
    @apply flex items-center justify-center gap-1;
  }
}
</style>
