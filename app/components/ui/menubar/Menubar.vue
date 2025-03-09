<script setup lang="ts">
import type { MenubarRootEmits, MenubarRootProps } from 'reka-ui'
import { MenubarRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<MenubarRootProps>()
const emits = defineEmits<MenubarRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    class="ui-Menubar"
  >
    <slot />
  </MenubarRoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-Menubar {
    @apply flex h-10 items-center gap-x-1 rounded-md border bg-background p-1;
  }
}
</style>
