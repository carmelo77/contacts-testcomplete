<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/nav/navbar.vue';

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>

</style>
