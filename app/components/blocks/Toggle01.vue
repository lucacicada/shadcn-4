<script setup lang="ts">
import { Bold } from 'lucide-vue-next'
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle aria-label="Toggle italic">
    <Bold class="w-4 h-4" />
  </Toggle>
</template>
