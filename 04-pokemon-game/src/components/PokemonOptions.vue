<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" 
                :key  ="pokemon.id"
                @click="$emit('selection' , pokemon.id)">
            {{ pokemon.name }}</li>            
        </ul>
    </div>  
</template>
  
  <script>
  export default {
      name:'PokemonOptions',
      props:{
        pokemons: {
            type:Array,
            required: true,
        }
      }
  }
  </script>
  
  <style>
 
        ul {
            list-style-type: none;
        }
        li {
            padding:2%;
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
                                               rgba(9,9,121,1) 35%,
                                               rgba(0,212,255,1) 100%); 
            color:#F4E869;
            font-weight: bolder;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
            margin-bottom: 10px;
            width: 250px;
        }

        li:hover {
            background-color: rgba(2, 0, 36, 1);
        }

        .options-container {
            display: flex;
            justify-content: center;
        }
  </style>