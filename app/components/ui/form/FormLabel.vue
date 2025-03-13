<script lang="ts" setup>
import type { LabelProps } from 'reka-ui'
import { useFormField } from './useFormField'
import { Label } from '@/components/ui/label'

defineProps<LabelProps>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="error ? 'ui-FormLabel-error' :'' "
    :for="formItemId"
  >
    <slot />
  </Label>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-FormLabel-error {
    @apply text-destructive;
  }
}
</style>
