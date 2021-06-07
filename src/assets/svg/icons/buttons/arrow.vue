<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :transform="arrowTransform"
    :target="target"
    v-on:click="scrollToElement({ behavior: 'smooth' })"
    style="cursor: pointer"
  >
    <circle opacity="0.1" cx="30" cy="30" r="30" fill="black" />
    <path
      d="M30 20L28.2375 21.7625L35.2125 28.75H20V31.25H35.2125L28.2375 38.2375L30 40L40 30L30 20Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "arrow",
    },
    width: {
      type: [Number, String],
      default: 60,
    },
    height: {
      type: [Number, String],
      default: 60,
    },
    arrowTransform: {
      type: [Number, String],
      default: "rotate(0)",
    },
    target: {
      type: [Number, String],
      default: "",
    },
  },
  methods: {
    scrollToElement(options) {
      const el = document.getElementById(this.target);

      if (el) {
        el.scrollIntoView(options);
      }
    },
  },
};
</script>

<style>
</style>