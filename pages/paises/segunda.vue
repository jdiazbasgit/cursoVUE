<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <h1>Ya es viernes!!!!</h1>
    <h1>{{msg}}</h1>
    <nuxt-link to="/paises/spain">españa</nuxt-link>
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
