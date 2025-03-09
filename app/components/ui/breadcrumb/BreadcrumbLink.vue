<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

withDefaults(defineProps<PrimitiveProps>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="ui-BreadcrumbLink"
  >
    <slot />
  </Primitive>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbLink {
    @apply transition-colors hover:text-foreground;
  }
}
</style>
