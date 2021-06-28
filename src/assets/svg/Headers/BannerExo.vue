<template>
  <div style="position: relative">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 3800 786"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3800" height="786" :fill="rectColor" />
    </svg>
    <slot></slot>
  </div>
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
      default: 3800.232143,
    },
    height: {
      type: [Number, String],
      default: 786.232143,
    },

    rectColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style>
#headerTextBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 3;
  position: absolute;
  top: 60%;

  transform: translateY(-55%);
  justify-content: center;
  align-content: center;
  align-items: center;
}
.courseTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 5em;
  line-height: 1em;
}
#HeaderSubTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5em;
  line-height: 2em;
  text-align: center;

  color: #ffffff;
}
.HeaderTitleText {
  width: 40%;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 2em;
  line-height: 1.2em;
  text-align: center;
  color: #000000;
}
</style>
<!--
    <Banner rectColor="#46BB6E" pathColor="#178C3F"></Banner>
-->