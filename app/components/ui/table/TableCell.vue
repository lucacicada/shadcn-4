<template>
  <td class="ui-TableCell">
    <slot />
  </td>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-TableCell {
    @apply p-4 align-middle [&:has([role=checkbox])]:pr-0;
  }
}
</style>
