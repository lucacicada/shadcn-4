<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div>
    <div class="space-y-1">
      <h4 class="text-sm font-medium leading-none">
        Radix Primitives
      </h4>
      <p class="text-sm text-muted-foreground">
        An open-source UI component library.
      </p>
    </div>
    <Separator
      class="my-4"
      label="Or"
    />
    <div class="flex items-center h-5 space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>
