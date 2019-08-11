<template>
  <div id="app" class="container">
    <MyHeader></MyHeader>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
}
</style>
