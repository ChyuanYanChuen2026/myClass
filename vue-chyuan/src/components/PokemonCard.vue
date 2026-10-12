<script setup> 
import { ref } from 'vue';

const props=defineProps(['name','type','number']);


</script>

<template>
  <div class="card">
    <div class="image">
    <slot></slot>
    </div>
    <ul class="info">
      <li>
        <strong>名字:</strong>{{props.name}}
      </li>
      <li>
        <strong>屬性:</strong>{{props.type}}
      </li>
      <li>
        <strong>編號:</strong>{{props.number}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card{
  background-color: #b3e7f0;
  width: 200px;
  height: 200px;
  border-radius: 8px;
}
.image{
  text-align: center;
}
</style>