<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="w-full max-w-screen-sm mx-auto space-y-4">
    <div
      v-if="title"
      class="flex items-center space-x-4"
    >
      <h1 class="text-4xl font-bold tracking-tight scroll-m-20">
        {{ title }}
      </h1>
    </div>

    <div class="border rounded-md ring-offset-background">
      <div class="flex min-h-[350px] w-full justify-center p-10 items-center">
        <slot />
      </div>
    </div>
  </div>
</template>
