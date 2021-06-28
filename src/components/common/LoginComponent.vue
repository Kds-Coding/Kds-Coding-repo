<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <button
        class="authButton"
        id="ConnectButton"
        @click="$router.push('/login')"
      >
        Connexion
      </button>
      <button
        class="authButton"
        id="RegisterButton"
        @click="$router.push('/register')"
      >
        Inscription
      </button>
      <!-- Tabs Titles -->

      <div class="authBox" id="Authentification">
        <header class="auth-header" id="AuthTitle">
          <slot name="header"></slot>
        </header>

        <section class="auth-body" id="AuthDescription">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="auth-footer" id="AuthFooter">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  height: 50%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

.authButton {
  width: 50%;
  height: 15%;
  border: none;

  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 2em;
  line-height: 1.5em;

  /* identical to box height */

  color: #000000;
}
</style>