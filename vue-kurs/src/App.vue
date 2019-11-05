<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/exercise1">Exercise 1</router-link>|
      <router-link to="/exercise2">Exercise 2</router-link>|
      <router-link to="/exercise3">Exercise 3</router-link>|
      <router-link to="/exercise4">Exercise 4</router-link>|
      <router-link to="/exercise5">Exercise 5</router-link>|
      <router-link to="/exercise6">Exercise 6</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
