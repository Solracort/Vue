<template>
  <div>
    <img v-if="img" :src="img" alt="bg image"/>
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input 
            v-model = "question"
            type="text" 
            placeholder ="Hazme una pregunta"/>
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{answer}}</h1>
        </div>
        
    </div>
  </div>  
  
</template>

<script>
export default {
    data(){
        return{
            question: null,
            answer: null, 
            img: null, 
            isValidQuestion: false
        }
    }, 
    methods: {
        async getAnswer(){
            try {
                this.answer = 'Pensando...'

                const {answer , image} = await fetch('https://yesno.wtf/api').then( r => r.json());
                this.answer = answer === 'yes' ? 'Si!!' : 'No!!';
                this.img = image;
                // console.log(answer,image);
            }   catch (error){
                console.log('IndecisionComponent produces error: ', error);
                this.answer = 'No ha sido posible cargar los datos de la API';
                this.img = null;
            }
            
        }

    },
    watch: {
        question(value, oldValue){

            this.isValidQuestion = false; 
            console.log({value})
            if ( !value.includes('?')) return

            this.isValidQuestion = true;

            //TODO : Realizar la peticion http
            this.getAnswer();

        }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;

        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>