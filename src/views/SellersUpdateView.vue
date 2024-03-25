<script>
import { getData, updateData } from '@/utils/api'
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            seller: {
                name: '',
                email: ''
            },
        }
    },
    mounted() {
        this.fetchSeller()
    },
    methods: {
        async fetchSeller() {
            try {
                const { data } = await getData(`/sellers/${this.$route.params.id}`)

                this.seller.name = data.name
                this.seller.email = data.email
            } catch (error) {
                console.error('Erro: ' + error)
            }
        },
        async onSubmit() {
            try {
                const { message } = await updateData(`/sellers/${this.$route.params.id}`, this.seller)

                alert(message)

                this.$router.push('/')
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
                <label for="name">
                    Preencha um nome
                </label>
                <br>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="name" placeholder="Nome" type="text" v-model="seller.name">
            </div>

            <div class="mt-5">
                <label for="email">Preencha um Email</label>
                <br>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="email" placeholder="Email" type="email" v-model="seller.email">
            </div>

            <button class="mt-3 px-3 py-2 bg-green-500 text-white rounded-md">Atualizar Vendedor</button>
        </form>
    </div>
</template>