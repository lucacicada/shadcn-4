<template>
  <div class="ui-card">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card {
    @apply rounded-lg border bg-card text-card-foreground shadow-sm;
  }
}
</style>
