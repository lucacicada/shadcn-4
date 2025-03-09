<script setup lang="ts">
import { Bold, Italic, Underline } from 'lucide-vue-next'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem
      value="bold"
      aria-label="Toggle bold"
    >
      <Bold class="w-4 h-4" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="italic"
      aria-label="Toggle italic"
    >
      <Italic class="w-4 h-4" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="underline"
      aria-label="Toggle underline"
    >
      <Underline class="w-4 h-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
