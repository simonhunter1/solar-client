<template>
  <div id="app">
    <NavBar></NavBar>
    <MainArea></MainArea>
    <Footer></Footer>
  </div>

</template>

<script>
import AnotherOne from './components/AnotherOne.vue'
import NavBar from './components/NavBar.vue'
import MainArea from './components/MainArea.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: { AnotherOne, NavBar, MainArea, Footer },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: 700;
  font-size: 24px;
}

a {
  color: #42b983;
}
</style>
