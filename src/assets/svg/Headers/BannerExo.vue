<template>
  <div style="position: relative">
   <svg 
    width="1670"
    height="234"
   viewBox="0 0 1900 260" 
   fill="none" 
   xmlns="http://www.w3.org/2000/svg">

    <rect width="1900" height="270" fill="#BB4646"/>
    <path 
        d="M1060 0H1440V365.595C1440 365.595 1436.47 397.412 1422.8 279.403C1409.12 161.394 1327.46 179.327 1301.06 223.869C1274.65 268.412 1191.98 224.448 1203.58 148.668C1227.39 -6.94168 1124.33 2.89237 1060 0Z" 
        fill="#A12C2C"
    />
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