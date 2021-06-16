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
            <img src="../public/img/icons/home.png" alt="" />
            <p style="margin: auto">Menu</p>
          </button>
        </div>
        <div id="profil" class="container col align-self-end">
          <img
            id="profilPic"
            src="../public/img/icons/me.png"
            alt=""
            height="88"
            width="88"
          />
          <div id="infos" class="d-flex flex-column justify-content-start">
            <p style="margin-bottom: 0px">Max</p>
            <p style="margin-bottom: 0px">Titre</p>
            <p style="margin-bottom: 0px">Succes: XiX</p>
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
@import url("https://fonts.googleapis.com/css2?family=Alatsi&display=swap");
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
  background-color: #e5e5e5;
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
  width: 289px;
  height: 103.15px;
  margin-right: 5%;
  right: 0;
  background-color: #f9f9f9;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  top: 10px;
}
#header {
  position: fixed;
  top: 0;
  width: 95%;
  z-index: 9999;
}
#infos p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23.0902px;
  line-height: 27px;
}

/* ---------------------------------------------------
    COURSE PAGES STYLE
----------------------------------------------------- */
.CourseContainer article {
  margin: 35px;
  display: flex;
  background: #ffffff;
  border-radius: 10px;
}
.course {
  height: 300px;
  h1 {
    font-size: 4.1em;
    margin: 2px;
  }
}

.excercise {
  height: 125px;
  h1 {
    font-size: 2.1em;
    margin-left: 0;
  }
}
.medal {
  height: 100%;
  display: flex;
  border-radius: 10px 0px 0px 10px;

  justify-content: center;
}
.content {
  background-color: #0000;
  height: 100%;
  width: 80%;
  margin-left: 5px;
}
.content p {
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 2em;
  line-height: 1.1em;

  color: #000000;
}
.content h1 {
  text-align: start;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  line-height: 1.1em;
  color: #000000;
}
.subTitle {
  background: #4691bd;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-family: Alatsi;
    font-style: normal;
    font-weight: normal;
    font-size: 83.4044px;
    line-height: 107px;

    color: #ffffff;
  }
}
.play {
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
}
</style>

   