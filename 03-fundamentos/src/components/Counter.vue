<template>
  <div>
    <h2>{{customTitle}}</h2>
    <p>{{counter}}<sup>2</sup> = {{ counter * counter }}</p>
    <div class="buttons-container">
        <button @click="increaseCounter">+1</button>
        <button @click="decreaseCounter">-1</button>

    </div>
  </div>
</template>

<script>
export default {
    props:
        // ['title', 'start'],
        {
            title:String,
            start: {
                type:Number,
                default: 100,
                // required : true,
                validator (value){
                    return value >0
                }
            }
        },

    // name:'Patito'
    data() {
        return{
            counter:this.start
        }

    }, 
    methods: {
        getSquareValue(){
            return this.counter*this.counter
        },
        increaseCounter(){
            this.counter++;
        },
        decreaseCounter(){
            this.counter--;
        }
    },
    computed: {
        squareCounter(){
            return this.counter * this.counter
        },
        customTitle(){
            //forma de acceder a las props como una propiedad comun
            return this.title || 'Counter'
        }
    }
}

</script>

<style>
    button{
        background-color: #64B687;
        border-radius:5px;
        border:3px green solid;
        color:white;
        cursor:pointer;
        font-weight: 800;
        margin:1%;
        padding: 5px 15px;
        transition: 0.3s ease-in-out
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out
    }
</style>