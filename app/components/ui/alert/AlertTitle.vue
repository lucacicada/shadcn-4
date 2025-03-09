<template>
  <h5 class="ui-AlertTitle">
    <slot />
  </h5>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertTitle {
    @apply mb-1 font-medium leading-none tracking-tight;
  }
}
</style>
