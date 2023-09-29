<template>
    <h1 v-if="!pokemon">Espere por favor... </h1>
    <div v-else="pokemon" 
         class="pokemon-general-container">
            <div class="title">
                <h1>¿Quien es este Pokemon?</h1>
            </div>        
        <PokemonPicture :pokemonId ="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons  ="pokemonArr"/>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions' ;

export default {
    name: 'PokemonPage',
    components: { PokemonPicture, 
                  PokemonOptions, 
                },
    data() {
        return {
          pokemonArr : [],
          pokemon: null,
          showPokemon: false,
        }
    }, 
    methods : {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor(Math.random()* 4)
            this.pokemon = this.pokemonArr[rndInt]        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>

<style scoped>

.pokemon-general-container{
    border:5px #423cb4 solid; 
    border-radius: 5px;
    margin:4px;
}
.title{
    background-color: #423cb4;
    margin:0;
    color:#FFFF;
    margin-bottom: 5px;
}
</style>