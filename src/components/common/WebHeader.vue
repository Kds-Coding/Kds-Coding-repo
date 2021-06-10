<template>
  <header>
    <Banner rectColor="#4691BD" pathColor="#1E6995">
      <Computer></Computer>
      <Www></Www>
      <Code></Code>
      <div id="headerTextBox">
        <h1 class="text-white text-center courseTitle">DEVELOPPEMENT WEB</h1>

        <slot></slot>
      </div>
    </Banner>
  </header>
</template>

<script>
import Code from "../../assets/svg/icons/dev web/code.vue";
import Computer from "../../assets/svg/icons/dev web/computer.vue";
import Www from "../../assets/svg/icons/dev web/www.vue";
import Banner from "../../assets/svg/Headers/bannerObj.vue";

export default {
  components: {
    Code,
    Computer,
    Www,
    Banner,
  },
};
</script>

<style>
</style>

