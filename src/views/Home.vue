<template>
  <div class="home">
    <!--  utilisation classique d'un component en Vue.js 3!-->
    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from "@/components/MusicsList";
export default {
  name: "Home",
  components: {
    MusicList,
  },
};
</script>
