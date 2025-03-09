<script setup lang="ts">
import type { SelectGroupProps } from 'reka-ui'
import { SelectGroup } from 'reka-ui'

const props = defineProps<SelectGroupProps>()
</script>

<template>
  <SelectGroup
    v-bind="props"
    class="ui-SelectGroup"
  >
    <slot />
  </SelectGroup>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SelectGroup {
    @apply p-1 w-full;
  }
}
</style>
