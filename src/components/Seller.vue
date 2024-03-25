<script>
import { deleteData, getData } from '@/utils/api'
import { RouterLink } from 'vue-router'

export default {
    props: {
        seller: Object
    },
    methods: {
        async deleteSeller() {
            const { message } = await deleteData(`/sellers/${this.seller.id}`)

            alert(message)

            window.location.reload()
        },
        async resendEmail() {
            const { message } = await getData(`/sellers/${this.seller.id}/resend-email`)

            alert(message)
        }
    }
}
</script>

<template>
    <div class="shadow-md p-5 w-full rounded-sm">
        <h2>
            <strong>Vendedor:</strong> {{ seller.name }}
        </h2>
        <h3>
            <strong>Email:</strong> {{ seller.email }}
        </h3>
        <div class="flex items-center gap-3 mt-5">
            <RouterLink :to="`/sellers/${seller.id}/sales`">
                <button class="bg-green-500 hover:bg-green-600 rounded-md px-3 py-2 text-white">
                    Ver vendas
                </button>
            </RouterLink>
            <RouterLink :to="`/sellers/${seller.id}/update`">
                <button class="bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-2 text-white">Editar</button>
            </RouterLink>
            <button class="bg-red-500 hover:bg-red-600 rounded-md px-3 py-2 text-white"
                @click="deleteSeller()">Excluir</button>
            <button class="bg-yellow-500 hover:bg-yellow-600 rounded-md px-3 py-2 text-white"
                @click="resendEmail()">Reenviar Email</button>
            <RouterLink :to="`/sellers/${seller.id}/sales/create`">
                <button class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-white">Nova
                    Venda</button>
            </RouterLink>
        </div>
    </div>
</template>