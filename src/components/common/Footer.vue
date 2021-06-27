<template>
  <footer id="bannerFooter" class="container-fluid">
    <div class="row" style="--bs-gutter-x: 0"><slot></slot></div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
/** USE CSS WHEN YOU CREATE NEW H1 AND P TAG ON OTHER VIEWS */
#bannerFooter {
  max-width: 100%;
  width: 100%;
  padding: 0;
  position: relative;
}
.footerLink {
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 69px;
  line-height: 88px;
  text-align: center;
  z-index: 2;
  color: #ffffff;
  width: 70%;
}

.centerLink {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.centerLinkB {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>