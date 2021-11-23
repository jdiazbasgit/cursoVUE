<template>
  <div class="hello">
    <button v-on:click="cambiaPadre">cambiar</button>
  </div>
</template>

<script>
export default {
  name: "ComponenteBoton",
  props: {
    cambiar: Function,
  },
  data() {
    return {
      texto: "estamos en un curso",
    };
  },
  methods: {
    /*cambiaPadre(){

}*/

     cambiaPadre() {
       console.log(this.cambiar)
      this.cambiar("este es el texto del padre cambiadpo");
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
