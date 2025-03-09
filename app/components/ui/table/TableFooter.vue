<template>
  <tfoot class="ui-TableFooter">
    <slot />
  </tfoot>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableFooter {
    @apply border-t bg-muted/50 font-medium [&>tr]:last:border-b-0;
  }
}
</style>
