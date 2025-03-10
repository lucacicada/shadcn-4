<script setup lang="ts">
useHead({
  title: 'Docs',
})

const docs = [
  { to: '/docs/components/alert', label: 'Alert' },
  { to: '/docs/components/alert-dialog', label: 'Alert dialog' },
  { to: '/docs/components/aspect-ratio', label: 'Aspect ratio' },
  { to: '/docs/components/avatar', label: 'Avatar' },
  { to: '/docs/components/badge', label: 'Badge' },
  { to: '/docs/components/breadcrumb', label: 'Breadcrumb' },
  { to: '/docs/components/button', label: 'Button' },
  { to: '/docs/components/card', label: 'Card' },
  { to: '/docs/components/checkbox', label: 'Checkbox' },
  { to: '/docs/components/collapsible', label: 'Collapsible' },
  { to: '/docs/components/combobox', label: 'Combobox' },
  { to: '/docs/components/command', label: 'Command' },
  { to: '/docs/components/context-menu', label: 'Context menu' },
  { to: '/docs/components/dialog', label: 'Dialog' },
  { to: '/docs/components/dropdown-menu', label: 'Dropdown menu' },
  { to: '/docs/components/hover-card', label: 'Hover card' },
  { to: '/docs/components/input', label: 'Input' },
  { to: '/docs/components/label', label: 'Label' },
  { to: '/docs/components/menubar', label: 'Menubar' },
  { to: '/docs/components/number-field', label: 'Number field' },
  { to: '/docs/components/pin-input', label: 'Pin input' },
  { to: '/docs/components/popover', label: 'Popover' },
  { to: '/docs/components/progress', label: 'Progress' },
  { to: '/docs/components/radio-group', label: 'Radio group' },
  { to: '/docs/components/resizable', label: 'Resizable' },
  { to: '/docs/components/scroll-area', label: 'Scroll area' },
  { to: '/docs/components/select', label: 'Select' },
  { to: '/docs/components/separator', label: 'Separator' },
  { to: '/docs/components/skeleton', label: 'Skeleton' },
  { to: '/docs/components/slider', label: 'Slider' },
  { to: '/docs/components/stepper', label: 'Stepper' },
  { to: '/docs/components/switch', label: 'Switch' },
  { to: '/docs/components/table', label: 'Table' },
  { to: '/docs/components/tabs', label: 'Tabs' },
  { to: '/docs/components/tags-input', label: 'Tags input' },
  { to: '/docs/components/textarea', label: 'Textarea' },
  { to: '/docs/components/toggle', label: 'Toggle' },
  { to: '/docs/components/toggle-group', label: 'Toggle group' },
  { to: '/docs/components/tooltip', label: 'Tooltip' },
]
</script>

<template>
  <div class="flex flex-1">
    <div class="relative border-r w-60">
      <div class="absolute inset-0 flex flex-col p-2 space-y-1 overflow-y-auto [scrollbar-width:thin]">
        <NuxtLink
          v-for="doc in docs"
          :key="doc.to"
          class="group flex items-center w-full h-8 px-2 py-1 font-normal rounded-lg text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground [&.router-link-active]:font-medium [&.router-link-active]:bg-accent"
          :to="doc.to"
        >
          {{ doc.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex-1 p-8">
      <NuxtPage />
    </div>
  </div>
</template>
