<template>
  <h3 class="ui-card-title">
    <slot />
  </h3>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-title {
    @apply text-2xl font-semibold leading-none tracking-tight;
  }
}
</style>
