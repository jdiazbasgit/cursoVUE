<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 style="color:red">{{valor}}</h1>
  <button v-on:click="cambiarValor('nuevo valor de padre')">padre</button>
  <HelloWorld :msg="cambiarValor"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
 
  data(){
    return{
      valor:"valor del padre",
    }
  },
  methods:{
    async cambiarValor(nuevo){
      this.valor=nuevo;
    }
  },
  watch: {
    valor: function(newValue, oldValue) {
      console.log(newValue, oldValue);
     // this.valor=newValue;
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
