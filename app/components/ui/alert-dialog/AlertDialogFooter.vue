<template>
  <div class="ui-AlertDialogFooter">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDialogFooter {
    @apply flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2;
  }
}
</style>
