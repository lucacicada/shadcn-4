<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { ListboxFilter, type ListboxFilterProps, useForwardProps } from 'reka-ui'
import { useCommand } from '.'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ListboxFilterProps>()
const forwardedProps = useForwardProps(props)

const { filterState } = useCommand()
</script>

<template>
  <div
    class="flex items-center border-b px-3"
    cmdk-input-wrapper
  >
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <ListboxFilter
      v-bind="{ ...forwardedProps, ...$attrs }"
      v-model="filterState.search"
      auto-focus
      class="ui-CommandInput"
    />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CommandInput {
    @apply flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50;
  }
}
</style>
