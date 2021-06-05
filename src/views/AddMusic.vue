<template>
  <h3 class="text-center">Ajoutez vos musiques !</h3>

  <!-- Utilisation typique d'un components dans une view-->
  <MusicCreate />
</template>

<script>
import MusicCreate from "../components/MusicCreate";
export default {
  components: {
    MusicCreate,
  },
};
</script>

<style>
</style>