<script setup>
const slug = useRoute().params.slug
const { data } = await useAsyncData(`content-${slug}`, () => {
  return queryCollection('content').path(`/components/${slug}`).first()
})

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <div class="w-full max-w-2xl min-w-0 mx-auto">
    <ContentRenderer
      v-if="data"
      :value="data"
    />
    <div v-else>
      Not found
    </div>
  </div>
</template>
