<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                  href="/"
                >
                  <img
                    src="https://www.reka-ui.com/logo.svg"
                    class="w-6 h-6"
                  >
                  <div class="mt-4 mb-2 text-lg font-medium">
                    shadcn/ui
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/introduction"
                  class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Introduction</div>
                  <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/installation"
                  class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Installation</div>
                  <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/typography"
                  class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Typography</div>
                  <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li
              v-for="component in components"
              :key="component.title"
            >
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/docs/introduction"
          class="ui-NavigationMenuTrigger"
        >
          Documentation
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
