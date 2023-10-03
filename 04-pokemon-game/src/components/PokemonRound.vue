<template >
    <div class="round-container">
        
        <div class="round-pic">
            <img class="round-image"
             src="../assets/round.png" 
             alt="roundimg.png"/>
        </div>
        <div class="round-number">
            <span class="round-points">{{ roundPoints }}</span>   
        </div>
                  
    </div>
</template>
<script>
export default {
    
      name:'PokemonRound',
      props:{
        roundPoints: Number,
      }
}
</script>
<style scoped>
     .round-container{
        width:50%;
        margin-left:45%;
        display:flex;

    }
    .round-image{
        width:70%;
    }
    .round-number{
        margin:auto;
        margin-right:2%;
    }
    .round-points{
        color: crimson;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:25px;
        font-weight: bold;
    }
</style>