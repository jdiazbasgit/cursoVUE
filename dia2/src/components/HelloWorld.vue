<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 style="color: red">{{ texto }}</h1>
    <ComponenteBoton :cambiar="cambiarTextoDeTexto" />
    <ul id="ul"></ul>
    <ul v-for="pais, index in paises" :key="index" id="ul">
    <li>{{ pais.name.common }}</li>
    </ul>
  </div>
</template>

<script>
import ComponenteBoton from "./ComponenteBoton.vue";
import axios from "axios";
export default {
  components: { ComponenteBoton },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  beforeCreate() {
    console.log("antes del componente");
  },
  created() {
    console.log("componente creado");
    let ul1 = document.querySelector("#ul");
    console.log(ul1)
    axios
      .get("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        this.paises = response.data;
       /* let ul = document.querySelector("#ul");
        this.paises.forEach((element) => {
          let li = document.createElement("li");
          li.innerHTML = element.name.common;
          ul.appendChild(li);
        });*/
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {
    let ul1 = document.querySelector("#ul");
    console.log(ul1);
    
  },
  updated() {
    console.log("modificacion de componente");
  },
  unmounted() {
    console.log("componente destruido");
  },
  data() {
    return {
      texto: "estamos en un curso",
      paises: null,
    };
  },
  methods: {
    async cambiarTextoDeTexto(nuevoTexto) {
      this.texto = nuevoTexto;
    },
  },
  watch: {
    texto: function (newValue, oldValue) {
      console.log(`hemos cambiado  el "valor" ${oldValue} por ${newValue}`);
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
