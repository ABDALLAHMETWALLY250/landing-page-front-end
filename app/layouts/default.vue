<template>
  <div class="w-full">
    <LayoutNavbar />

    <main>
      <slot />
    </main>
    <LazyLayoutFooter hydrate-on-visible />
  </div>
</template>

