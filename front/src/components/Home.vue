<template>
  <div class="column is-half is-offset-one-quarter">
    <nav class="panel">
      <p class="panel-heading has-background-success has-text-white">
        Bienvenidos a Contacts Test
      </p>
      <div class="panel-block">
        En la presente observará una lista de contactos sencilla.
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
