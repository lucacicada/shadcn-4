<template>
  <span class="ui-ContextMenuShortcut">
    <slot />
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-ContextMenuShortcut {
    @apply ml-auto text-xs tracking-widest text-muted-foreground;
  }
}
</style>
