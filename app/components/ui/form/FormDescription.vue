<script lang="ts" setup>
import { useFormField } from './useFormField'

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    class="ui-FormDescription"
  >
    <slot />
  </p>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-FormDescription {
    @apply text-sm text-muted-foreground;
  }
}
</style>
