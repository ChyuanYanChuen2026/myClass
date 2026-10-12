<script setup>
import { computed, ref } from "vue";
const searchInputVal = ref();
const newToDo = ref([]);

function addToDo() {
    if (searchInputVal) {
        newToDo.value.push({
            id: Date.now(),
            text: searchInputVal.value,
            isDone: false,
        });
    } else {
        alert("請輸入待辦清單");
    }
}

const countFinishList = computed(() => {
    return newToDo.value.filter((e) => e.isDone).length;
});

function deleteList(id) {
    newToDo.value = newToDo.value.filter((e) => e.id !== id);
}
</script>

<template>
    <h2>待辦清單</h2>
    <div class="container">
        <input type="search" v-model.trim="searchInputVal" />
        <button class="btn btn-primary" @click="addToDo">新增</button>

        <ul>
            <!-- <li>
                <input type="checkbox">
                <label class="form-label">健身</label>
                <button class="btn btn-primary">刪除</button>
            </li> -->
            <transition-group name="t1">
                <li class="mt-1" v-for="(item, index) in newToDo" :key="item.id">
                    <input type="checkbox" v-model="item.isDone" />
                    <label :class="['form-label', { isDone: item.isDone }]">{{ item.text }}</label>
                    <button class="btn btn-primary" @click="deleteList(item.id)">刪除</button>
                </li>
            </transition-group>
        </ul>
        <p>共{{ newToDo.length }}項，已完成{{ countFinishList }}</p>
    </div>
</template>

<style scoped>
li {
    list-style: none;
}

button {
    height: 28px;
    margin: 0 10px;
    line-height: 28px;
    padding: 0 5px;
    font-size: 12px;
}

.isDone {
    text-decoration: line-through;
    color: gray;
}

.t1-enter-from{
    color:aquamarine;
    opacity:0;
}
.t1-enter-to{
    color:brown;
    opacity: 1;
}
.t1-enter-active{
    transition: all 1s ease-in;
}
</style>
