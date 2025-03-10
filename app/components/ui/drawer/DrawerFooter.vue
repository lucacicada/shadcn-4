<template>
  <div class="ui-DrawerFooter">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DrawerFooter {
    @apply mt-auto flex flex-col gap-2 p-4;
  }
}
</style>
