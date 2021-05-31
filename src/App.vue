<!-- C'est dans le fichier app.vue qu'il doit y avoir le header(component), l'overlay et le compte-->

<template>
  <div class="wrapper">
    <Sidebar :class="{ streth: active }"></Sidebar>

    <div id="content" :class="{ streth: active }">
      <nav
        class="navbar navbar-expand-lg"
        id="header"
        :class="{ streth: active }"
      >
        <div class="container-fluid col align-self-start">
          <button
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            type="button"
            id="moreOpen"
          >
            <!-- hop une petite div image-->
            <img src="../public/home.png" alt="" />
            <p style="margin: auto">Menu</p>
          </button>
        </div>
        <div id="profil" class="container col align-self-end">
          <img
            id="profilPic"
            src="../public/me.png"
            alt=""
            height="88"
            width="88"
          />
          <div id="infos" class="d-flex flex-column justify-content-start">
            <p>Max</p>
            <p>Titre</p>
            <p>Succes: XiX</p>
          </div>
        </div>
      </nav>
      <!--  routeur-view permet  d'afficher la view demandé dans le header(routeur-link) -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  width: 100%;
  height: 100%;
}

.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
}
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: calc(100% - 250px);
  margin: 0;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}

#content.streth {
  width: 100%;
}
#header.streth {
  width: 100%;
}
#moreOpen {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  width: 100px;
  height: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
}

#profil {
  width: 220px;
  margin-right: 5%;
  right: 0;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0px 3px grey;
  max-width: 260px;
  position: fixed;
  top: 10px;
}
#header {
  position: fixed;
  top: 0;
  width: 95%;
}
</style>

   