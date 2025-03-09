<template>
  <tr class="ui-TableRow">
    <slot />
  </tr>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableRow {
    @apply border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted;
  }
}
</style>
