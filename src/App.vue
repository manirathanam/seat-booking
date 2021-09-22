<template>
  <div class="layout-root">
    <seat-layout></seat-layout>
    <checkout></checkout>
  </div>
</template>

<script>
import Checkout from './components/Checkout.vue';
import SeatLayout from './components/SeatLayout.vue';

export default {
  name: 'App',
  components: {
    SeatLayout,
    Checkout
  },
  created:function(){
    // initiate data fetching
    this.$store.dispatch('fetch');
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
  height: calc(100% - 60px);
  width: 100%;
  position: absolute;
}

body{
  margin: 0px;
}

.layout-root {
  display: flex;
}

@media screen and (max-width:700px) {
  
  .layout-root{
    flex-direction: column;
  }

}
</style>
