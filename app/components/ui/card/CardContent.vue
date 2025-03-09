<template>
  <div class="ui-card-content">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-content {
    @apply p-6 pt-0;
  }
}
</style>
