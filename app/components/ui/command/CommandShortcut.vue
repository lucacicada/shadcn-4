<template>
  <span class="ui-CommandShortcut">
    <slot />
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-CommandShortcut {
    @apply ml-auto text-xs tracking-widest text-muted-foreground;
  }
}
</style>
