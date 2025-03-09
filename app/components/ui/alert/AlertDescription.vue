<template>
  <div class="ui-AlertDescription">
    <slot />
  </div>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AlertDescription {
    @apply
      text-sm
      [&_p]:leading-relaxed;
  }
}
</style>
