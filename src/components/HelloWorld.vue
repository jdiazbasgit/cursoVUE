/* eslint-disable vue/require-v-for-key */
<template>

    <h1>texto:{{ msg }}</h1>
    <h1 >{{texto}}</h1>
    <h1>{{5*6}}</h1>
    <button v-on:click="cambiarTexto('texto cambiado desde el evento')">pulsa para cambiar</button>
    <input type="text" v-on:keyPress="agregarPersona" v-model="texto" >

    <button v-on:click="agregarPersona">agregar persona</button>

    
    <ul v-for="(persona,index) in personas" :key="index" >
      <li v-if="index % 2==0">{{index}}-{{persona.nombre}}-{{persona.apellido}}-{{persona.telefono}}</li>
    </ul>
    

</template>

<script>
class Persona{
  constructor(nombre, apellido, telefono){
    this.nombre=nombre;
    this.apellido=apellido;
    this.telefono=telefono;
  }
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      texto:"texto inicial",
      personas:[]
    }
  },
  methods:{
    cambiarTexto(textoNuevo){
       this.texto=textoNuevo;
    },
    dameValor(){
      return "valor"
    },
    cambiarDesdeInput(valor){
      this.texto=valor;
    },
    agregarPersona(){

     let  persona=new Persona("federico","garcia","9393939");
      this.personas.push(persona);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
