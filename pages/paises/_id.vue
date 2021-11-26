<template>
  <div class="container">
    <h1>{{ pais.name.common }}</h1>
    <nuxt-link to="/" class="privado">volver</nuxt-link>
    <img :src="bandera" /><img /> <img :src="escudo" /><img />
  </div>
</template>

<script>
import router from "vue-router";
import axios from "axios";
import env from "../config/env";
export default {
  name: "AlbumIndividualPage",
  data() {
    return {
      pais: String,
      bandera: String,
      escudo: String,
    };
  },
  methods: {},

  created() {
    //console.log(`${env.endpoint}${this.$route.params.id}`)
    axios
      .get(`${env.endpoint}${this.$route.params.id}`)
      .then((response) => {
        this.pais = response.data[0];
        //console.log(`stringify:${JSON.stringify(this.pais)}`)
        this.bandera = this.pais.flags.png;
        this.escudo = this.pais.coatOfArms.png;

        //console.log("pais:"+this.pais)
        // let bandera= document.querySelector("#bandera")
        //bandera.src=this.pais.name.common
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>