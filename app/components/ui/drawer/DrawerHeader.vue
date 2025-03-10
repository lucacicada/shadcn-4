<template>
  <div class="ui-DrawerHeader">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DrawerHeader {
    @apply grid gap-1.5 p-4 text-center sm:text-left;
  }
}
</style>
