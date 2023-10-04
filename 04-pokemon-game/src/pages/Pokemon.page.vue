<template>
    <PokemonRound :roundPoints = "round"/>
    <PokemonScore :scorePoints = "score"/>
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
            Siguiente
        </button>
    </template>        
       
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonScore from '@/components/PokemonScore.vue'
import PokemonRound from '@/components/PokemonRound.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions' ;

export default {
    name: 'PokemonPage',
    components: { PokemonPicture, 
                  PokemonOptions, 
                  PokemonScore,
                  PokemonRound,
                },
    data() {
        return {
          pokemonArr : [],
          pokemon: null,
          showPokemon: false,
          showAnswer: false,
          message: '', 
          score: 0,
          round: 1,
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
                this.score += 10
                
            } else {
                this.message = `Oops, lo siento, era ${this.pokemon.name}`
                this.score -= 10
            }
            
            if (this.round===5){
                this.message += ` Game Over - FINAL SCORE: ${this.score}`
                this.round=0
                this.score=0
            }
        },
        newGame (){
            this.pokemon = null 
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.mixPokemonArray()
            this.round +=1
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>

<style scoped>

.pokemon-general-container{
    background: rgb(147,125,127);
    background: radial-gradient(circle, 
               rgba(147,125,127,1) 0%, rgba(203,213,224,1) 79%);
    border:5px #DC143C solid; 
    border-radius: 5px;
    margin:4px;
    margin-top:1%;
}
.title{
    /* background-color: #423cb4; */
    background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
                                               rgba(9,9,121,1) 35%,
                                               rgba(0,212,255,1) 100%); 
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
@media screen and (min-width: 768px) {
    .pokemon-general-container{
        width:40%;
        margin:auto;
    }
}
</style>