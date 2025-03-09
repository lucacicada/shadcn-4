<script setup lang="ts">
useHead({
  title: 'Badge',
})
</script>

<template>
  <div class="w-full max-w-2xl min-w-0 mx-auto">
    <div class="space-y-2">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-bold tracking-tight scroll-m-20">
          Badge
        </h1>
      </div>
      <p class="text-base text-muted-foreground">
        Displays a badge or a component that looks like a badge.
      </p>
    </div>

    <div class="h-[50px]" />

    <div class="border rounded-md ring-offset-background">
      <div class="flex min-h-[350px] w-full justify-center p-10 items-center">
        <BlocksBadge01 />
      </div>
    </div>
  </div>
</template>
