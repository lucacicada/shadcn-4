<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">
        Open popover
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">
            Dimensions
          </h4>
          <p class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div class="grid gap-2">
          <div class="grid items-center grid-cols-3 gap-4">
            <Label for="width">Width</Label>
            <Input
              id="width"
              type="text"
              default-value="100%"
              class="h-8 col-span-2"
            />
          </div>
          <div class="grid items-center grid-cols-3 gap-4">
            <Label for="maxWidth">Max. width</Label>
            <Input
              id="maxWidth"
              type="text"
              default-value="300px"
              class="h-8 col-span-2"
            />
          </div>
          <div class="grid items-center grid-cols-3 gap-4">
            <Label for="height">Height</Label>
            <Input
              id="height"
              type="text"
              default-value="25px"
              class="h-8 col-span-2"
            />
          </div>
          <div class="grid items-center grid-cols-3 gap-4">
            <Label for="maxHeight">Max. height</Label>
            <Input
              id="maxHeight"
              type="text"
              default-value="none"
              class="h-8 col-span-2"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
