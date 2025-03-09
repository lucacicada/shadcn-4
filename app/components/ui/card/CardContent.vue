<template>
  <div class="ui-card-content">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-content {
    @apply rounded-lg border bg-card text-card-foreground shadow-sm;
  }
}
</style>
