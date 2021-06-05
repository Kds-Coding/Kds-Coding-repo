<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 1505 786"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="786" :fill="rectColor" />
    <path
      d="M800 0H2000V772.512C1440 772.512 1432.94 839.74 1405.59 590.385C1378.25 341.03 1214.92 378.922 1162.11 473.041C1109.3 567.161 943.951 474.264 967.15 314.139C1014.79 -14.6679 808.652 6.11164 680 0Z"
      :fill="pathColor"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 1440.232143,
    },
    height: {
      type: [Number, String],
      default: 786.232143,
    },

    rectColor: {
      type: String,
      default: "currentColor",
    },
    pathColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style>
</style>
<!--
    <Banner rectColor="#46BB6E" pathColor="#178C3F"></Banner>
-->