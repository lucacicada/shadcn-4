<template>
  <div class="relative w-full overflow-auto">
    <table class="ui-Table">
      <slot />
    </table>
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-Table {
    @apply w-full caption-bottom text-sm;
  }
}
</style>
