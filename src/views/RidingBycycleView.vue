<template>
  <Header currentPage="ridingbycycle" />
  <RBContents></RBContents>
</template>

<script>
import Header from "@/components/Header.vue";
import RBContents from "@/components/ridingbycycle/RBContents.vue";

export default {
  name: "RidingBycycle",
  components: {
    Header,
    RBContents,
  },
};
</script>
