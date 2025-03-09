<script setup lang="ts">
import type { AlertDialogCancelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { AlertDialogCancel } from 'reka-ui'
import { computed } from 'vue'
import { buttonVariants } from '../button/Button.vue'

const props = defineProps<AlertDialogCancelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    class="ui-AlertDialogCancel"
    :class="buttonVariants({ variant: 'outline' })"
  >
    <slot />
  </AlertDialogCancel>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDialogCancel {
    @apply mt-2 sm:mt-0;
  }
}
</style>
