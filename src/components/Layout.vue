<template>
  <div className="grid gap-4 grid-cols-none md:grid-cols-content">
    <main class="bg-gray-100">
      <slot name="main" />
    </main>
    <aside class="bg-gray-100">
      <slot name="aside" />
    </aside>
  </div>
</template>
