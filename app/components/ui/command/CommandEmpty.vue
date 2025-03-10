<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { useCommand } from '.'

const props = defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>()

const { filterState } = useCommand()
const isRender = computed(() => !!filterState.search && filterState.filtered.count === 0,
)
</script>

<template>
  <Primitive
    v-if="isRender"
    v-bind="props"
    class="ui-CommandEmpty"
  >
    <slot />
  </Primitive>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CommandEmpty {
    @apply py-6 text-center text-sm;
  }
}
</style>
