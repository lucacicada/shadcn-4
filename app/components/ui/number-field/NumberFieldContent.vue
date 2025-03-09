<template>
  <div class="ui-NumberFieldContent">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-NumberFieldContent {
    @apply relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5;
  }
}
</style>
