<script>
import { getData } from '../utils/api'
import Seller from '../components/Seller.vue'
import Search from '../components/Seller.vue'

export default {
  data() {
    return {
      sellers: [],
      searchQuery: ''
    }
  },
  mounted() {
    this.fetchSellers()
  },
  methods: {
    async fetchSellers() {
      try {
        const { data } = await getData('/sellers')
        this.sellers = data
      } catch (error) {
        console.error('Erro: ' + error)
      }
    }
  },
  components: {
    Seller,
    Search
  }
}
</script>

<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-1 justify-items-center gap-5 p-5">
    <Seller v-for="(seller, index) in sellers" :key="index" :seller="seller" />
  </div>
</template>
