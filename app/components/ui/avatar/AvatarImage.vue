<script setup lang="ts">
import type { AvatarImageProps } from 'reka-ui'
import { AvatarImage } from 'reka-ui'

const props = defineProps<AvatarImageProps>()
</script>

<template>
  <AvatarImage
    v-bind="props"
    class="ui-AvatarImage"
  />
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-AvatarImage {
    @apply h-full w-full object-cover;
  }
}
</style>
