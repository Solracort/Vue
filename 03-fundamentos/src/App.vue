
import Counter from './components/Counter.vue';

import Counter from './components/Counter.vue';
<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Counter :start="101" title="Entradas"/> -->

    <!-- <Counter  
    :start="15"
    /> -->

    <Indecision/>
  </div>
  
</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from './components/indecision.vue';

export default {
  components: { 
    // Counter, 
    Indecision }, 
  name: 'App',
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
