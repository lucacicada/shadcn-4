<template>
  <div class="w-full max-w-2xl min-w-0 mx-auto">
    <div class="space-y-2">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-bold tracking-tight scroll-m-20">
          Tags Input
        </h1>
      </div>
      <p class="text-base text-muted-foreground">
        Tag inputs render tags inside an input, followed by an actual text input.
      </p>
    </div>

    <div class="h-[50px]" />

    <div class="border rounded-md ring-offset-background">
      <div class="flex min-h-[350px] w-full justify-center p-10 items-center">
        <BlocksTagsInput01 />
      </div>
    </div>
  </div>
</template>
