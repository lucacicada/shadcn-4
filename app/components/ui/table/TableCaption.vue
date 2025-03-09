<template>
  <caption class="ui-TableCaption">
    <slot />
  </caption>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableCaption {
    @apply mt-4 text-sm text-muted-foreground;
  }
}
</style>
