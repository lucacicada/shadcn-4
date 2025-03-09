<template>
  <div class="ui-card-header">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-header {
    @apply flex flex-col gap-y-1.5 p-6;
  }
}
</style>
