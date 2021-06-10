<template>
  <div id="Discover">
    <span class="discoverText">Découvrir </span>

    <ArrowBottom
      colorArrow="black"
      v-on:click="scrollToElement({ behavior: 'smooth' })"
      height="64"
      width="64"
    ></ArrowBottom>
  </div>
</template>

<script>
import ArrowBottom from "../../assets/svg/icons/buttons/arrowbottom.vue";
export default {
  components: {
    ArrowBottom,
  },
  methods: {
    scrollToElement(options) {
      const el = document.getElementsByClassName("CoursePage")[0];

      if (el) {
        el.scrollIntoView(options);
      }
    },
  },
};
</script>

<style>
#Discover {
  position: absolute;
  top: 83%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}
.discoverText {
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;

  /* identical to box height */
  text-align: center;

  color: #000000;
}
</style>