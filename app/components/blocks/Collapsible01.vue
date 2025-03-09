<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const isOpen = ref(false)
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    class="w-[350px] space-y-2"
  >
    <div class="flex items-center justify-between px-4 space-x-4">
      <h4 class="text-sm font-semibold">
        @peduarte starred 3 repositories
      </h4>
      <CollapsibleTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="p-0 w-9"
        >
          <ChevronsUpDown class="w-4 h-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div class="px-4 py-3 font-mono text-sm border rounded-md">
      @radix-ui/primitives
    </div>
    <CollapsibleContent class="space-y-2">
      <div class="px-4 py-3 font-mono text-sm border rounded-md">
        @radix-ui/colors
      </div>
      <div class="px-4 py-3 font-mono text-sm border rounded-md">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
