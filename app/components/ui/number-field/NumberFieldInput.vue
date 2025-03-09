<script setup lang="ts">
import { NumberFieldInput } from 'reka-ui'
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    class="ui-NumberFieldInput"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NumberFieldInput {
    @apply flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm text-center ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
  }
}
</style>
