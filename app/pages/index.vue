<script setup lang="ts">
import { BellRing, Check, ChevronDownIcon } from 'lucide-vue-next'

const sofiaRole = ref('Owner')
const jacksonRole = ref('Member')
const isabellaRole = ref('Member')
</script>

<template>
  <div class="mx-auto max-w-screen-2xl w-full p-6">
    <div class="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
      <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Build your component library
      </h1>
      <p class="max-w-2xl text-lg font-light text-foreground">
        Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div class="flex-1 space-y-1">
                <p class="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p class="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div>
              <div
                v-for="(notification, index) in [
                  {
                    title: 'Your call has been confirmed.',
                    description: '1 hour ago',
                  },
                  {
                    title: 'You have a new message!',
                    description: '1 hour ago',
                  },
                  {
                    title: 'Your subscription is expiring soon!',
                    description: '2 hours ago',
                  },
                ]"
                :key="index"
                class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    {{ notification.title }}
                  </p>
                  <p class="text-sm text-muted-foreground">
                    {{ notification.description }}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">
              <Check class="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Invite your team members to collaborate.
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-6">
            <div class="flex items-center justify-between space-x-4">
              <div class="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://www.shadcn-vue.com/avatars/01.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p class="text-sm text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger as-child>
                  <Button
                    variant="outline"
                    class="ml-auto"
                  >
                    {{ sofiaRole }}
                    <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  class="p-0"
                  align="end"
                >
                  <Command v-model="sofiaRole">
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="Viewer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Viewer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view and comment.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Developer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Developer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and edit.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Billing"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Billing</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and manage billing.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Owner"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Owner</p>
                          <p class="text-sm text-muted-foreground">
                            Admin-level access to all resources.
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <div class="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://www.shadcn-vue.com/avatars/02.png" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p class="text-sm text-muted-foreground">
                    p@example.com
                  </p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger as-child>
                  <Button
                    variant="outline"
                    class="ml-auto"
                  >
                    {{ jacksonRole }}
                    <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  class="p-0"
                  align="end"
                >
                  <Command v-model="jacksonRole">
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="Viewer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Viewer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view and comment.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Developer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Developer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and edit.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Billing"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Billing</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and manage billing.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Owner"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Owner</p>
                          <p class="text-sm text-muted-foreground">
                            Admin-level access to all resources.
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <div class="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://www.shadcn-vue.com/avatars/03.png" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p class="text-sm text-muted-foreground">
                    i@example.com
                  </p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger as-child>
                  <Button
                    variant="outline"
                    class="ml-auto"
                  >
                    {{ isabellaRole }}
                    <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  class="p-0"
                  align="end"
                >
                  <Command v-model="isabellaRole">
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="Viewer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Viewer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view and comment.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Developer"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Developer</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and edit.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Billing"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Billing</p>
                          <p class="text-sm text-muted-foreground">
                            Can view, comment and manage billing.
                          </p>
                        </CommandItem>
                        <CommandItem
                          value="Owner"
                          class="space-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>Owner</p>
                          <p class="text-sm text-muted-foreground">
                            Admin-level access to all resources.
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Add a new payment method to your account.
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-6">
            <RadioGroup
              default-value="card"
              class="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem
                  id="card"
                  value="card"
                  class="peer sr-only"
                />
                <Label
                  for="card"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    class="mb-3 h-6 w-6"
                  >
                    <rect
                      width="20"
                      height="14"
                      x="2"
                      y="5"
                      rx="2"
                    />
                    <path d="M2 10h20" />
                  </svg>
                  Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  id="paypal"
                  value="paypal"
                  class="peer sr-only"
                />
                <Label
                  for="paypal"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    class="mb-3 h-6 w-6"
                  >
                    <path
                      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                      fill="currentColor"
                    />
                  </svg>
                  Paypal
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  id="apple"
                  value="apple"
                  class="peer sr-only"
                />
                <Label
                  for="apple"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    class="mb-3 h-6 w-6"
                  >
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Apple
                </Label>
              </div>
            </RadioGroup>
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="First Last"
              />
            </div>
            <div class="grid gap-2">
              <Label for="number">Card number</Label>
              <Input
                id="number"
                placeholder=""
              />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="grid gap-2">
                <Label for="month">Expires</Label>
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      January
                    </SelectItem>
                    <SelectItem value="2">
                      February
                    </SelectItem>
                    <SelectItem value="3">
                      March
                    </SelectItem>
                    <SelectItem value="4">
                      April
                    </SelectItem>
                    <SelectItem value="5">
                      May
                    </SelectItem>
                    <SelectItem value="6">
                      June
                    </SelectItem>
                    <SelectItem value="7">
                      July
                    </SelectItem>
                    <SelectItem value="8">
                      August
                    </SelectItem>
                    <SelectItem value="9">
                      September
                    </SelectItem>
                    <SelectItem value="10">
                      October
                    </SelectItem>
                    <SelectItem value="11">
                      November
                    </SelectItem>
                    <SelectItem value="12">
                      December
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-2">
                <Label for="year">Year</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      v-for="i in 10"
                      :key="i"
                      :value="`${new Date().getFullYear() + i}`"
                    >
                      {{ new Date().getFullYear() + i }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-2">
                <Label for="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="CVC"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl">
              Create an account
            </CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <svg
                  viewBox="0 0 15 15"
                  width="1.2em"
                  height="1.2em"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A7 7 0 0 1 7.5 3.756A7 7 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25"
                    clip-rule="evenodd"
                  />
                </svg>
                GitHub
              </Button>
              <Button variant="outline">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  />
                </svg>
                Google
              </Button>
            </div>
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">
              Create account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>
