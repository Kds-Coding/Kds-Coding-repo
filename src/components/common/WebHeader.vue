<template>
  <header>
    <Banner rectColor="#4691BD" pathColor="#1E6995">
      <h1 class="text-white text-center courseTitle">DEVELOPPEMENT WEB</h1>

      <Code></Code>
      <slot></slot>
      <Computer></Computer>
      <Www></Www>
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
#WebSubTitle {
  position: absolute;

  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 51px;
  text-align: center;

  color: #ffffff;
}
.WebTitleText {
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 37px;
  line-height: 47px;
  text-align: center;
  z-index: 2;
  color: #000000;
  position: absolute;
  top: 70%;
  width: 40%;
  transform: translate(-50%);
  left: 50%;
}
</style>

