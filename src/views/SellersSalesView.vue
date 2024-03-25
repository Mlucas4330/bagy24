<script>
import { RouterLink } from 'vue-router'
import Sale from '../components/Sale.vue'
import { getData } from '../utils/api'

export default {
    data() {
        return {
            seller: {},
        }
    },
    mounted() {
        this.fetchSellersSales()
    },
    methods: {
        async fetchSellersSales() {
            try {
                const { data } = await getData(`/sellers/${this.$route.params.id}/sales`)
                this.seller = data
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
    <div class="flex items-center flex-col">
        <h1><strong>Vendedor: </strong>{{ seller.name }}</h1>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-items-center">
        <div v-for="(sale, index) in seller.sales" class="shadow-md p-5 rounded-sm w-full">
            <h1>
                <strong>Valor da venda: </strong>
                <span class="text-green-600">{{ sale.value }}</span>
            </h1>
            <h5><strong>Data da venda:</strong> {{ sale.sale_date }}</h5>
        </div>
    </div>
</template>