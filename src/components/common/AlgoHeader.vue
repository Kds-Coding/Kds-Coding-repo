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
#algoSubTitle {
  position: absolute;

  top: 60%;
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
.algoTitleText {
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

