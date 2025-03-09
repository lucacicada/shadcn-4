<script setup lang="ts">
import type { AlertDialogActionProps } from 'reka-ui'
import { AlertDialogAction } from 'reka-ui'
import { buttonVariants } from '../button/Button.vue'

const props = defineProps<AlertDialogActionProps>()
</script>

<template>
  <AlertDialogAction
    v-bind="props"
    :class="buttonVariants()"
  >
    <slot />
  </AlertDialogAction>
</template>
