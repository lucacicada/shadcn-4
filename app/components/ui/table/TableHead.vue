<template>
  <th class="ui-TableHead">
    <slot />
  </th>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableHead {
    @apply h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0;
  }
}
</style>
