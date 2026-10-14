<script setup>

const props=defineProps(['foodName','foodPrice','id'])
const emits=defineEmits(['click'])
function addCart(){
    const products = {
        'name':props.foodName,
        'price':props.foodPrice,
        'id':props.id
    }
    emits('click',products)
}

</script>

<template>
    <div class="product-card">
        <h3 class="product-name">{{ props.foodName }}</h3>
        <p class="product-price">$ {{props.foodPrice}}</p>
        <button class="btn btn-success" @click="addCart">
            加入購物車
        </button>
    </div>
</template>


<style scoped>
.product-card {
    width: 200px;
    padding: 16px;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.product-name {
    min-height: 48px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
}

.product-price {
    font-size: 16px;
    color: #e53935;
    margin-bottom: 16px;
}

</style>