<template>
  <div class="ui-SheetHeader">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SheetHeader {
    @apply flex flex-col gap-y-2 text-center sm:text-left;
  }
}
</style>
