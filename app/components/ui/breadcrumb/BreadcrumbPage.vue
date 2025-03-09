<template>
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    class="ui-BreadcrumbPage"
  >
    <slot />
  </span>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbPage {
    @apply font-normal text-foreground;
  }
}
</style>
