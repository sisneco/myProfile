<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.clear-fix::after {
  content: "";
  display: block;
  clear: both;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}

@media screen and (min-width: 1200px) {
  #app {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
