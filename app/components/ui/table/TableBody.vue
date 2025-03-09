<template>
  <tbody class="ui-TableBody">
    <slot />
  </tbody>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableBody {
    @apply [&_tr:last-child]:border-0;
  }
}
</style>
