<template>
  <div class="ui-card-footer">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-card-footer {
    @apply flex items-center p-6 pt-0;
  }
}
</style>
