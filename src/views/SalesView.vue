<script>
import { getData } from '../utils/api'
import Sale from '../components/Sale.vue'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      sales: []
    }
  },
  mounted() {
    this.fetchSales()
  },
  methods: {
    async fetchSales() {
      try {
        const { data } = await getData('/sales')
        this.sales = data
      } catch (error) {
        console.error('Erro: ' + error)
      }
    }
  },
  components: {
    Sale
  }
}
</script>

<template>
  <RouterLink class="ml-10" to="/">Voltar</RouterLink>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-items-center">
    <Sale v-for="(sale, index) in sales" :key="index" :sale="sale" :seller="sale.seller" />
  </div>
</template>
