<script lang="ts" setup>
import { useId } from 'reka-ui'
import { provide } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div class="ui-FormItem">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-FormItem {
    @apply space-y-2;
  }
}
</style>
