# shadcn 4

Difference from shadcn 3:

- No `tailwind-merge`
- `tailwind 4` obviously
- `@layer components`

## Components

- [x] alert
- [x] alert-dialog
- [x] aspect-ratio
- [x] avatar
- [x] badge
- [x] breadcrumb
- [x] button
- [x] card
- [x] checkbox
- [x] collapsible
- [x] context-menu
- [x] dialog
- [x] dropdown-menu
- [x] hover-card
- [x] input
- [x] label
- [x] menubar
- [x] number-field
- [x] pin-input
- [x] popover
- [x] progress
- [x] radio-group
- [x] resizable
- [x] scroll-area
- [x] select
- [x] separator
- [x] skeleton
- [x] slider
- [x] stepper
- [x] switch
- [x] table
- [x] tabs
- [x] tags-input
- [x] textarea
- [x] toggle
- [x] toggle-group
- [x] tooltip

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
