<template>
  <div class="ui-AlertDialogHeader">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDialogHeader {
    @apply flex flex-col gap-y-2 text-center sm:text-left;
  }
}
</style>
