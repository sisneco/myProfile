<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/ress@4.0.0/dist/ress.min.css"
  />
  <Header currentPage="about" />
  <div class="zoom-in">
    <TopPage />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TopPage from "@/components/toppage/TopContents.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    TopPage,
  },
};
</script>

<style>
.zoom-in {
  animation-name: zoomInAnime;
  animation-duration: 1s;
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
</style>
