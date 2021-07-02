<template>
  <header>
    <Banner rectColor="#46BB6E" pathColor="#178C3F">
      <algorithm_left></algorithm_left>
      <coding ></coding> 
      <div id="headerTextBox">
        <h1 class="text-white text-center courseTitle">DEV OBJ</h1>
        <slot></slot>
      </div>
    </Banner>
  </header>
</template>

<script>
import coding from "../../assets/svg/icons/dev ori/coding";
import algorithm_left from "../../assets/svg/icons/Algo/algorithm_left";
import Banner from "../../assets/svg/Headers/bannerObj.vue";

export default {
  components: {
    coding,
    algorithm_left,
    Banner,
  },
};
</script>

<style>
</style>

