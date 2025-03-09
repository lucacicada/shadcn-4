<template>
  <ol class="ui-BreadcrumbList">
    <slot />
  </ol>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-BreadcrumbList {
    @apply flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5;
  }
}
</style>
