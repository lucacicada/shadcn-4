<template>
  <span class="ui-DropdownMenuShortcut">
    <slot />
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-DropdownMenuShortcut {
    @apply ml-auto text-xs tracking-widest opacity-60;
  }
}
</style>
