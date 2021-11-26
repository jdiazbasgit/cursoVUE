<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <h1>Ya es jueves!!!!</h1>
    <h1>{{msg}}</h1>
    <nuxt-link to="/paises/spain">españa</nuxt-link>
    <nuxt-link to="/paises/portugal">portugal</nuxt-link>
    <nuxt-link to="/paises/primera" class="privado">primera</nuxt-link>
     <nuxt-link to="/paises/segunda" class="enlace">segunda</nuxt-link>
  </div>
</template>
<script>
export default {
  name:"Tutorial",
  props:{
    msg:String
  }
}
</script>
<style>
.privado{
  color:green
}
</style>
