<script setup>
// import HelloView from '@/views/HelloView.vue';
// import BMIView from '@/views/BMIView.vue';
// import TemView from '@/views/TemView.vue';
// import Demo from '@/components/demo/Demo9.vue';  
</script>

<template>
 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VueClass</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink to="/" class="nav-link">首頁</RouterLink>
        <RouterLink to="/about" class="nav-link">關於</RouterLink>
        <RouterLink to="/tem" class="nav-link">溫度計算</RouterLink>
        <RouterLink :to="{name:'Hello'}" class="nav-link">HelloPage</RouterLink>
        <RouterLink :to="{name:'BMI'}" class="nav-link">BMI計算</RouterLink>
        <RouterLink :to="{name:'ScoreList'}" class="nav-link">分數列表</RouterLink>
        <RouterLink :to="{name:'TodoList'}" class="nav-link">待辦清單</RouterLink>
        <RouterLink :to="{name:'Lifecycle'}" class="nav-link">Vue生命週期</RouterLink>
        <RouterLink :to="{name:'PropEmit'}" class="nav-link">父子組件</RouterLink>
        <RouterLink :to="{name:'PokemonList'}" class="nav-link">寶可夢卡片(父子組件)</RouterLink>
        <RouterLink :to="{name:'DemoList'}" class="nav-link">DemoList</RouterLink>
        <RouterLink :to="{name:'ShoppingCart'}" class="nav-link">購物車</RouterLink>
        <RouterLink :to="{name:'PiniaShoppingCart'}" class="nav-link">Pinia購物車</RouterLink>
      </div>
    </div>
  </div>
</nav>
<div class="container mt-5">
  <!-- <p>
    <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about">關於</RouterLink>
  </p> -->

  <div>
    <RouterView />
  </div>

</div>
</template>

<style scoped>
.highlight{
  color: coral !important;
  font-size: 20px;
}
</style>
