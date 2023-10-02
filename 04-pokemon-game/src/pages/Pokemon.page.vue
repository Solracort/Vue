<template>
    <br/>
    <h1 v-if="!pokemon">Espere por favor... </h1>
    <div v-else="pokemon" 
         class="pokemon-general-container">
            <div class="title">
                <h1>¿Quien es este Pokemon?</h1>
            </div>        
        <PokemonPicture 
            :pokemonId ="pokemon.id" 
            :showPokemon="showPokemon" />
        <PokemonOptions 
            :pokemons  ="pokemonArr"
            @selection="checkAnswer($event)"/>
    </div>
    <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button class="newGameButton"
            @click="newGame">
            Nuevo Juego
        </button>
    </template>        
       
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
          showAnswer: false,
          message: ''
        }
    }, 
    methods : {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor(Math.random()* 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer( selectedId){
            this.showPokemon=true   
            this.showAnswer = true 
            if (selectedId===this.pokemon.id){
                this.message = `Correcto, es ${this.pokemon.name} !!!`
            } else {
                this.message = `Oops, lo siento, era ${this.pokemon.name}`
            }
            
        },
        newGame (){
            this.pokemon = null 
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.mixPokemonArray()
        }
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
    margin-top:1%;
}
.title{
    background-color: #423cb4;
    margin:0;
    color:#FFFF;
    margin-bottom: 5px;
}
.newGameButton{
    padding:7px;
    color: #FFFF;
    font-weight: bold;
    border-radius:10px;
    background-color:red;
}
.newGameButton:hover{
    cursor:pointer;
    background-color:crimson;
}
</style>