<template>
  <header>
    <Banner rectColor="#BB4646" pathColor="#A12C2b">
      <neural></neural>
      <algorithm_left></algorithm_left>
      <algorithm_right></algorithm_right>
      <div id="headerTextBox">
        <h1 class="text-white text-center courseTitle">ALGORITHMIE</h1>
        <slot></slot>
      </div>
    </Banner>
  </header>
</template>

<script>
import neural from "../../assets/svg/icons/Algo/neural";
import algorithm_left from "../../assets/svg/icons/Algo/algorithm_left";
import algorithm_right from "../../assets/svg/icons/Algo/algorithm_right";
import Banner from "../../assets/svg/Headers/bannerObj.vue";

export default {
  components: {
    neural,
    algorithm_left,
    algorithm_right,
    Banner,
  },
};
</script>

<style>
</style>

