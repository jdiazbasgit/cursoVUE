/* eslint-disable vue/require-v-for-key */
<template>
  <h1>campo:{{ campo1 }}</h1>
  <h1>{{ entrada }}</h1>
  <h1>{{ texto }}</h1>
  <h1>{{ 5 * 6 }}</h1>
  <button v-on:click="cambiarTexto('texto cambiado desde el evento')">
    pulsa para cambiar
  </button>
  <input
    type="text"
    v-on:keyPress="agregarPersona"
    v-model="texto"
    id="campo1"
  />

  <button v-on:click="agregarPersona">agregar persona</button>

  <ul>
    <li v-for="(persona, index) in personas" :key="index">
      <div v-show="index % 2 == 0">
        {{ index }}-{{ persona.nombre }}-{{ persona.apellido }}-{{
          persona.telefono
        }}
      </div>
    </li>
  </ul>
  <ul>
    <li v-for="(pais,index) in paises" :key="index">{{pais.capital[0]}}</li>
  </ul>
</template>

<script>
class Persona {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: Function,
  },
  created() {
    console.log("created");
    axios
      .get("https://restcountries.com/v3.1/subregion/europe")
      .then((result) => {
        
        this.paises = result.data;
        console.log(this.paises);
      });
  },
  data() {
    return {
      texto: "texto inicial",
      personas: [],
      campo1: "",
      entrada: this.msg,
      paises: null,
    };
  },
  methods: {
    cambiarTexto(textoNuevo) {
      this.texto = textoNuevo;
    },
    dameValor() {
      return "valor";
    },
    cambiarDesdeInput(valor) {
      this.texto = valor;
    },
    agregarPersona() {
      console.log(this.msg);
      this.msg("datos cambiados del padre");
      let campo1 = document.querySelector("#campo1");
      this.campo1 = campo1.value;
      let persona = new Persona("federico", "garcia", "9393939");
      this.personas.push(persona);
    },
  },
};
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
