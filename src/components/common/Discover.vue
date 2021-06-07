<template>
  <div id="Discover">
    Découvrir

    <ArrowBottom
      colorArrow="black"
      v-on:click="scrollToElement({ behavior: 'smooth' })"
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
  top: 70%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}
#discoverButton {
  cursor: pointer;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  width: 0;
  height: 0;
  text-decoration: none;
  display: inline-block;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
  transform: translate(50%);
  border-top: 20px solid #fff;
}
</style>