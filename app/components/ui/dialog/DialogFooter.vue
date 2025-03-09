<template>
  <div class="ui-dialog-footer">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-dialog-footer {
    @apply flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2;
  }
}
</style>
