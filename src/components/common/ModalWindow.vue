<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modalBackdrop">
      <div class="modalBox" id="Modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header"></slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer" id="modalFooter">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" >
.modalBackdrop {
  position: fixed;
  top: 50%;
  bottom: 0;
  left: 50%;
  z-index: 4955;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
}

.modalBox {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4691bd;
  justify-content: space-between;
  h1,
  h2 {
    font-family: Alatsi;
    font-style: normal;
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    line-height: 1em;
  }
  h2 {
    font-size: 1.9em;
    line-height: 1.2em;
  }
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;

  margin: 20px;
  p {
    font-family: Alatsi;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5em;
    line-height: 1.3em;
    color: #000000;
  }
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>