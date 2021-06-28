
<template>
  <header>
    <Banner rectColor="#5D5F71" pathColor="#5D4E6D">
      <div id="headerTextBox">
        <h1 class="text-white text-center courseTitle">
          Tu t'es trompé de chemin ?
        </h1>

        <h1>Oups: page inexistante... Réessaie</h1>
      </div>
    </Banner>
  </header>
</template>

<script>
import Banner from "@/assets/svg/Headers/bannerObj.vue";

export default { components: { Banner } };
</script>

<style>
</style>