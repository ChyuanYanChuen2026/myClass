<script setup> 

// defineProps(['title']);
// const props=defineProps({'title':Number});
const props = defineProps({
  'title':String,
  'msg':{
    type:String,
    require:true,
  },
  'count':{
    type:Number,
    default:10
  }
});

const emit =defineEmits(['eventBtnClick1','eventBtnClick2']); 
function handleClick () {
  emit('eventBtnClick1',{
    'msg':'這是來自Child組件的資料',
  })
}

</script>

<template>
  {{ props.title }}<br>
  {{ props.msg }}<br>
  {{ props.count }}

 <button @click="handleClick">接收來自子組件資料</button> 
</template>

<style scoped>

</style>