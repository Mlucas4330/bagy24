<script>
import { createData } from '@/utils/api'
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            sale: {
                seller_id: '',
                sale_date: '',
                value: ''
            },
        }
    },
    mounted() {
        this.sale.seller_id = this.$route.params.id
    },
    methods: {
        async onSubmit() {
            try {
                const { message } = await createData(`/sales`, this.sale)

                alert(message)

                this.$router.push(`/sellers/${this.$route.params.id}/sales`)
            } catch (error) {
                console.error('Erro: ' + error)
            }
        }
    }
}
</script>

<template>
    <div class="container mx-auto">
        <RouterLink to="/">Voltar</RouterLink>
        <form class="mt-5" @submit.prevent="onSubmit">
            <div>
                <label for="sale_date">
                    Preencha um nome
                </label>
                <br>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="sale_date" placeholder="Data da Venda" type="date" v-model="sale.sale_date">
            </div>

            <div class="mt-5">
                <label for="value">Preencha um valor</label>
                <br>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="value" placeholder="Valor" type="number" v-model="sale.value">
            </div>

            <button class="mt-3 px-3 py-2 bg-green-500 text-white rounded-md">Criar Venda</button>
        </form>
    </div>
</template>