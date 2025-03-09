<script setup lang="ts">
import { Terminal, Bold, Italic, Underline } from 'lucide-vue-next'

const modelValue = ref(['Apple', 'Banana'])
</script>

<template>
  <div class="py-8 space-y-8">
    <BlockContainer title="Alert">
      <Alert>
        <Terminal class="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </BlockContainer>

    <BlockContainer title="Aspect Ratio">
      <AspectRatio
        :ratio="16 / 9"
        class="bg-muted"
      >
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="object-cover w-full h-full rounded-md"
        >
      </AspectRatio>
    </BlockContainer>

    <BlockContainer title="Alert">
      <Alert>
        <Terminal class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </BlockContainer>

    <BlockContainer title="Alert Dialog">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline">
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </BlockContainer>

    <BlockContainer title="Avatar">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?w=80&dpr=2&q=80"
          alt="@reka-ui"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </BlockContainer>

    <BlockContainer title="Badge">
      <Badge>Badge</Badge>
    </BlockContainer>

    <BlockContainer title="Button">
      <Button>Click me</Button>
    </BlockContainer>

    <BlockContainer title="Input">
      <Input />
    </BlockContainer>

    <BlockContainer title="Popover">
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
    </BlockContainer>

    <BlockContainer title="Label">
      <Label>
        Label
      </Label>
    </BlockContainer>

    <BlockContainer title="Progress">
      <Progress
        :model-value="10"
      />
    </BlockContainer>

    <BlockContainer title="Checkbox">
      <Checkbox />
    </BlockContainer>

    <BlockContainer title="Badge">
      <Badge>
        Badge
      </Badge>
    </BlockContainer>

    <BlockContainer title="Slider">
      <Slider
        :model-value="[10]"
        :max="100"
        :step="1"
      />
    </BlockContainer>

    <BlockContainer title="Textarea">
      <Textarea />
    </BlockContainer>

    <BlockContainer title="Toggle">
      <Toggle>
        Toggle
      </Toggle>
    </BlockContainer>

    <BlockContainer title="Tooltip">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">
              Hover
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </BlockContainer>

    <BlockContainer title="Toggle Group">
      <ToggleGroup type="multiple">
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
        >
          <Bold class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Toggle italic"
        >
          <Italic class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          aria-label="Toggle underline"
        >
          <Underline class="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </BlockContainer>

    <BlockContainer title="Tags Input">
      <TagsInput v-model="modelValue">
        <TagsInputItem
          v-for="item in modelValue"
          :key="item"
          :value="item"
        >
          <TagsInputItemText />
          <TagsInputItemDelete />
        </TagsInputItem>

        <TagsInputInput placeholder="Fruits..." />
      </TagsInput>
    </BlockContainer>

    <BlockContainer title="Table">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">
              Invoice
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="invoice in [
              {
                invoice: 'INV001',
                paymentStatus: 'Paid',
                totalAmount: '$250.00',
                paymentMethod: 'Credit Card',
              },
              {
                invoice: 'INV002',
                paymentStatus: 'Pending',
                totalAmount: '$150.00',
                paymentMethod: 'PayPal',
              },
              {
                invoice: 'INV003',
                paymentStatus: 'Unpaid',
                totalAmount: '$350.00',
                paymentMethod: 'Bank Transfer',
              },
              {
                invoice: 'INV004',
                paymentStatus: 'Paid',
                totalAmount: '$450.00',
                paymentMethod: 'Credit Card',
              },
              {
                invoice: 'INV005',
                paymentStatus: 'Paid',
                totalAmount: '$550.00',
                paymentMethod: 'PayPal',
              },
              {
                invoice: 'INV006',
                paymentStatus: 'Pending',
                totalAmount: '$200.00',
                paymentMethod: 'Bank Transfer',
              },
              {
                invoice: 'INV007',
                paymentStatus: 'Unpaid',
                totalAmount: '$300.00',
                paymentMethod: 'Credit Card',
              },
            ]"
            :key="invoice.invoice"
          >
            <TableCell class="font-medium">
              {{ invoice.invoice }}
            </TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell class="text-right">
              {{ invoice.totalAmount }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </BlockContainer>
  </div>
</template>
