<template>
  <span class="ui-MenubarShortcut">
    <slot />
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-MenubarShortcut {
    @apply ml-auto text-xs tracking-widest text-muted-foreground;
  }
}
</style>
