<script setup> 
import member from '@/common/member.js';
import { Admin } from '@/common/admin.js';

const m1 = new member('John', 30);
const m2 = new Admin('Alice', 25, 'Administrator');
console.log(m1.name, m1.age); // John 30
console.log(m2.name, m2.age, m2.role); // Alice 25 Administrator

</script>

<template>
<h1>Hello, World!</h1>
</template>

<style scoped>
h1{
    color: rgb(116, 185, 218);
}
</style>