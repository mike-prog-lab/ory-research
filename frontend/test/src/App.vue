
<template>
  <Dashboard />
<!--  <Login />-->
<!--  <Signup />-->
<!--  <HelloWorld />-->
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    Login,
    Signup,
    Dashboard,
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
}
</style>
