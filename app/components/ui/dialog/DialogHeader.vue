<template>
  <div class="ui-dialog-header">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-dialog-header {
    @apply flex flex-col gap-y-1.5 text-center sm:text-left;
  }
}
</style>
