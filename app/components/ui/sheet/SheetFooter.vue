<template>
  <div class="ui-SheetFooter">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SheetFooter {
    @apply flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2;
  }
}
</style>
