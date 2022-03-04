<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    "index":Index
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
