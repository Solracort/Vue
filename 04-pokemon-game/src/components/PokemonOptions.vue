<template>
    <div class="options-container">
            <li v-for="pokemon in pokemons" 
                :key  ="pokemon.id"
                @click="$emit('selection' , pokemon.id)">
            {{ pokemon.name }}</li>            
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
  
  <style scoped>
        
        .options-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width:98%;
        }
        
        li {
            padding:2%;
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
                                               rgba(9,9,121,1) 10%,
                                               rgba(0,212,255,1) 100%); 
            color:#F4E869;
            font-weight: bolder;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
            
            width: 80%;
            margin:auto;
            margin-bottom: 10px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        li:hover {
            background-color: rgba(2, 0, 36, 1);
        }

     
        @media screen and (min-width: 768px) {
            .options-container {
                width: 100%; /* Cambia el ancho del contenedor en pantallas grandes */
            }
            
            li {
                width: 50%; /* Cambia el ancho de los elementos de la lista en pantallas grandes */
                display:flex;
                justify-content: center;
            }       
        }

  </style>