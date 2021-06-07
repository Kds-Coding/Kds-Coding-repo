<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="cursor: pointer"
  >
    <path
      d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z"
      :fill="colorArrow"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "arrowbottom",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },

    colorArrow: {
      type: [Number, String],
      default: "defaultColor",
    },
  },
};
</script>

<style>
</style>