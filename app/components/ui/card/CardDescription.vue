<template>
  <p class="ui-card-description">
    <slot />
  </p>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-description {
    @apply text-sm text-muted-foreground;
  }
}
</style>
