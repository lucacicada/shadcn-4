<script lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

export type SheetVariants = VariantProps<typeof sheetVariants>

export const sheetVariants = cva(
  'ui-SheetContent',
  {
    variants: {
      side: {
        top: 'ui-SheetContent-top',
        bottom: 'ui-SheetContent-bottom',
        left: 'ui-SheetContent-left',
        right: 'ui-SheetContent-right',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  })
</script>

<script setup lang="ts">
interface SheetContentProps extends DialogContentProps {
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="sheetVariants({ side })"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <X class="w-4 h-4 text-muted-foreground" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>

<style>
@reference "@/assets/css/main.css";

@layer components {
  .ui-SheetContent {
    @apply fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500;
  }
  .ui-SheetContent-top {
    @apply inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top;
  }
  .ui-SheetContent-bottom {
    @apply inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom;
  }
  .ui-SheetContent-left {
    @apply inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm;
  }
  .ui-SheetContent-right {
    @apply inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm;
  }
}
</style>
