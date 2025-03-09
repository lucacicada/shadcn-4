<template>
  <thead class="ui-TableHeader">
    <slot />
  </thead>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableHeader {
    @apply [&_tr]:border-b;
  }
}
</style>
