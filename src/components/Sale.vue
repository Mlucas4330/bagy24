<script>
export default {
    props: {
        sale: Object
    }
}
</script>

<template>
    <div class="shadow-md p-5 rounded-sm w-full">
        <h2><strong>Vendedor:</strong> {{ sale.seller.name }}</h2>
        <h1>
            <strong>Valor da venda: </strong>
            <span class="text-green-600">{{ sale.value }}</span>
        </h1>
        <h5><strong>Data da venda:</strong> {{ sale.sale_date }}</h5>
    </div>
</template>