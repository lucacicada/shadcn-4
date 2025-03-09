<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky border-b top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="flex items-center px-6 h-14">
        <NuxtLink
          to="/docs/components"
          class="px-2 py-1 rounded-lg transition-colors hover:text-foreground/80 text-foreground/80 [&.router-link-active]:text-foreground"
        >
          Components
        </NuxtLink>
      </div>
    </header>

    <div class="flex flex-col flex-1">
      <slot />
    </div>
  </div>
</template>
