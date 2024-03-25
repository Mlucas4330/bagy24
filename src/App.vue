<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="flex justify-center p-5">
    <nav class="flex items-center gap-5">
      <RouterLink to="/">Vendedores</RouterLink>
      <RouterLink to="/sales">Vendas</RouterLink>
      <RouterLink to="/sellers/create">
        <button class="bg-green-600 hover:bg-green-700 px-3 py-2 text-white rounded-md">Novo vendedor</button>
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>