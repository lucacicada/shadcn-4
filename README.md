# shadcn 4

Difference from shadcn 3:

- `tailwind 4` (obviously)
- `@layer components`
- `defineModel`
- No `tailwind-merge`
- No `delegatedProps`
- No `useVModel`

## Components

- [ ] [Accordion](https://lucacicada.github.io/shadcn-4/docs/components/accordion)
- [x] [Alert](https://lucacicada.github.io/shadcn-4/docs/components/alert)
- [x] [Alert Dialog](https://lucacicada.github.io/shadcn-4/docs/components/alert-dialog)
- [x] [Aspect Ratio](https://lucacicada.github.io/shadcn-4/docs/components/aspect-ratio)
- [x] [Avatar](https://lucacicada.github.io/shadcn-4/docs/components/avatar)
- [x] [Badge](https://lucacicada.github.io/shadcn-4/docs/components/badge)
- [x] [Breadcrumb](https://lucacicada.github.io/shadcn-4/docs/components/breadcrumb)
- [x] [Button](https://lucacicada.github.io/shadcn-4/docs/components/button)
- [ ] [Calendar](https://lucacicada.github.io/shadcn-4/docs/components/calendar)
- [x] [Card](https://lucacicada.github.io/shadcn-4/docs/components/card)
- [ ] [Carousel](https://lucacicada.github.io/shadcn-4/docs/components/carousel)
- [x] [Checkbox](https://lucacicada.github.io/shadcn-4/docs/components/checkbox)
- [x] [Collapsible](https://lucacicada.github.io/shadcn-4/docs/components/collapsible)
- [ ] [Combobox](https://lucacicada.github.io/shadcn-4/docs/components/combobox)
- [x] [Command](https://lucacicada.github.io/shadcn-4/docs/components/command)
- [x] [Context Menu](https://lucacicada.github.io/shadcn-4/docs/components/context-menu)
- [x] [Dialog](https://lucacicada.github.io/shadcn-4/docs/components/dialog)
- [ ] [Drawer](https://lucacicada.github.io/shadcn-4/docs/components/drawer)
- [x] [Dropdown Menu](https://lucacicada.github.io/shadcn-4/docs/components/dropdown-menu)
- [ ] [Form](https://lucacicada.github.io/shadcn-4/docs/components/form)
- [x] [Hover Card](https://lucacicada.github.io/shadcn-4/docs/components/hover-card)
- [x] [Input](https://lucacicada.github.io/shadcn-4/docs/components/input)
- [x] [Label](https://lucacicada.github.io/shadcn-4/docs/components/label)
- [x] [Menubar](https://lucacicada.github.io/shadcn-4/docs/components/menubar)
- [x] [Navigation Menu](https://lucacicada.github.io/shadcn-4/docs/components/navigation-menu)
- [x] [Number Field](https://lucacicada.github.io/shadcn-4/docs/components/number-field)
- [ ] [Pagination](https://lucacicada.github.io/shadcn-4/docs/components/pagination)
- [x] [Pin Input](https://lucacicada.github.io/shadcn-4/docs/components/pin-input)
- [x] [Popover](https://lucacicada.github.io/shadcn-4/docs/components/popover)
- [x] [Progress](https://lucacicada.github.io/shadcn-4/docs/components/progress)
- [x] [Radio Group](https://lucacicada.github.io/shadcn-4/docs/components/radio-group)
- [x] [Range Calendar](https://lucacicada.github.io/shadcn-4/docs/components/range-calendar)
- [x] [Resizable](https://lucacicada.github.io/shadcn-4/docs/components/resizable)
- [x] [Scroll Area](https://lucacicada.github.io/shadcn-4/docs/components/scroll-area)
- [x] [Select](https://lucacicada.github.io/shadcn-4/docs/components/select)
- [x] [Separator](https://lucacicada.github.io/shadcn-4/docs/components/separator)
- [ ] [Sheet](https://lucacicada.github.io/shadcn-4/docs/components/sheet)
- [ ] [Sidebar](https://lucacicada.github.io/shadcn-4/docs/components/sidebar)
- [x] [Skeleton](https://lucacicada.github.io/shadcn-4/docs/components/skeleton)
- [x] [Slider](https://lucacicada.github.io/shadcn-4/docs/components/slider)
- [x] [Stepper](https://lucacicada.github.io/shadcn-4/docs/components/stepper)
- [x] [Switch](https://lucacicada.github.io/shadcn-4/docs/components/switch)
- [x] [Table](https://lucacicada.github.io/shadcn-4/docs/components/table)
- [x] [Tabs](https://lucacicada.github.io/shadcn-4/docs/components/tabs)
- [x] [Tags Input](https://lucacicada.github.io/shadcn-4/docs/components/tags-input)
- [x] [Textarea](https://lucacicada.github.io/shadcn-4/docs/components/textarea)
- [x] [Toggle](https://lucacicada.github.io/shadcn-4/docs/components/toggle)
- [x] [Toggle Group](https://lucacicada.github.io/shadcn-4/docs/components/toggle-group)
- [x] [Tooltip](https://lucacicada.github.io/shadcn-4/docs/components/tooltip)

## Why @layer components?

It's an experiment, I do not like `tailwind-merge` all that much and also the `@layer components` it's not used much.

In real world scenario I found it's convenient to use a specialized class to get the exact component styled you want.

## BUG

There is a *bug* (not really a bug) when using this lib in `Vue`, you NEED to import the main style BEFORE anything else, otherwise the components will not be styled correctly.

```ts
import './main.css'
import { createApp } from 'vue'

...
```

That's because, the browser will discard the layer order if you import a layer before declaring the layer order, this is called 'implicit order rule'.

So, if you do:

```ts
import Home from './Home.vue'
import './main.css'
```

The `Home.vue` will inject the CSS that contains the `@layer components` directive before the `main.css` and the components will not be styled correctly.
