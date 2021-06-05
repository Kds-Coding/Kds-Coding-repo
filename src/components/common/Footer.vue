<template>
  <footer id="bannerFooter" class="container-fluid">
    <slot></slot>
  </footer>
</template>

<script>
export default {};
</script>

<style>
#bannerFooter {
  max-width: 100%;
  width: 100%;
  padding: 0;
}
.footerLink {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 69px;
  line-height: 88px;
  text-align: center;
  z-index: 2;
  color: #ffffff;
}
</style>