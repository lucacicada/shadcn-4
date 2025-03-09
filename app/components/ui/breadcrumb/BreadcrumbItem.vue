<template>
  <li class="ui-BreadcrumbItem">
    <slot />
  </li>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbItem {
    @apply inline-flex items-center gap-1.5;
  }
}
</style>
