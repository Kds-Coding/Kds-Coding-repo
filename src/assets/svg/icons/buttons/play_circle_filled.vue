<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.1667 6C13.0667 6 0 19.0667 0 35.1667C0 51.2667 13.0667 64.3333 29.1667 64.3333C45.2667 64.3333 58.3333 51.2667 58.3333 35.1667C58.3333 19.0667 45.2667 6 29.1667 6ZM23.3333 48.2917V22.0417L40.8333 35.1667L23.3333 48.2917Z"
      :fill="circleColor"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "play_circle",
    },
    width: {
      type: [Number, String],
      default: 70,
    },
    height: {
      type: [Number, String],
      default: 70,
    },
    circleColor: {
      type: [Number, String],
      default: "defaultColor",
    },
  },
};
</script>

<style>
</style>