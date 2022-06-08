<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/ress@4.0.0/dist/ress.min.css"
  />
  <div class="zoom-in">
    <Header />
    <TopPage />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopPage from "./components/toppage/TopContents.vue";

export default {
  name: "App",
  components: {
    Header,
    TopPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}

.zoom-in {
  animation-name: zoomInAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes zoomInAnime {
  from {
    transform: scale(0.6);
  }

  to {
    transform: scale(1);
  }
}

@media screen and (min-width: 1200px) {
  #app {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
