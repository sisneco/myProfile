<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/ress@4.0.0/dist/ress.min.css"
  />
  <TopPage />
</template>

<script>
// @ is an alias to /src
import TopPage from "@/components/TopContents.vue";

export default {
  name: "HomeView",
  components: {
    TopPage,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
