<script setup> 
import { computed, ref } from 'vue';
import PokemonCard from '@/components/PokemonCard.vue';
import PokemonData from '@/data/pokemon.json';

const pokemons = ref(PokemonData);

function getTypeString (type){
  return Array.from(type).join('、');
}
const pokemonFormateList = computed(()=>{
  return pokemons.value.map((x)=>{
    return {
      ...x,
      'typeDisplay':getTypeString(x.types)
    }
  });
});

</script>

<template>
<div class="d-flex flex-wrap">
  <PokemonCard class="m-1" v-for="(pokemon,index) in pokemonFormateList" :key="pokemon.number" :name="pokemon.name" :type="pokemon.typeDisplay" :number="pokemon.number">
    <img :src="pokemon.image" :alt="pokemon.name">
  </PokemonCard>
</div>
</template>

<style scoped>

</style>