<template >
    <div class="score-container">
        
        <div class="score-pic">
            <img class="score-image"
             src="../assets/score.png" 
             alt="scoreimg.png"/>
        </div>
       <div class="score-number">
            <span class="score-points">{{ scorePoints }}</span>   
       </div>
                  
    </div>
</template>
<script>
export default {
    name:'PokemoScore',
    props:{
        scorePoints: Number,
    },
}
</script>
<style scoped>
    .score-container{
        width:50%;
        margin-left:45%;
        display:flex;

    }
    .score-image{
        width:70%;
    }
    .score-number{
        margin:auto;
        margin-right:2%;
    }
    .score-points{
        color: crimson;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:25px;
        font-weight: bold;
    }
    @media screen and (min-width: 768px) {
        .score-container{
            width:20%;
        }
        .score-points{
            font-size:45px;
        }
    }
</style>