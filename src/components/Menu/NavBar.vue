<template>
  <nav
    class="navbar navbar-expand-sm sticky-top"
    style="background-color: #ffffff"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../../../public/img/icons/log.jpg"
      /></router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item" id="Algo">
          <a
            data-toggle="collapse"
            href="#AlgoSubMenu"
            role="button"
            aria-expanded="false"
            aria-controls="AlgoSubMenu"
            class=""
            >Algorithmie
          </a>
          <ul class="collapse list-unstyled subMenu" id="AlgoSubMenu">
            <li>
              <router-link class="" to="/algo">Tous les cours</router-link>
            </li>
            <li>
              <router-link to="/algo/course1">Introduction</router-link>
            </li>
            <li>
              <router-link class="" to="/algo/course2"
                >Les variables</router-link
              >
            </li>
          </ul>
        </li>

        <li class="nav-item" id="DevWeb">
          <a
            href="#DevWebSubMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class=""
            >Développement web</a
          >
          <ul class="collapse list-unstyled subMenu" id="DevWebSubMenu">
            <li>
              <router-link class="" to="/web">Tous les cours</router-link>
            </li>
            <li>
              <router-link to="/web/course1">Introduction</router-link>
            </li>
            <li>
              <router-link class="" to="/web/course2"
                >Arts plastiques !</router-link
              >
            </li>
          </ul>
        </li>

        <li class="nav-item" id="DevObj">
          <a
            href="#DevObjSubMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class=""
            >Dév Objet</a
          >
          <ul class="collapse list-unstyled subMenu" id="DevObjSubMenu">
            <li>
              <router-link class="" to="/obj/course3">Les cours</router-link>
            </li>
            <li>
              <router-link to="/obj/course1">Introduction</router-link>
            </li>
            <li>
              <router-link class="" to="/obj/course2">course2</router-link>
            </li>
          </ul>
        </li>

        <li class="nav-item" id="Connect">
          <a
            href="#ConnectSubMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class=""
            >Connecte toi !</a
          >
          <ul class="collapse list-unstyled subMenu" id="ConnectSubMenu">
            <li>
              <router-link to="/Login">Connexion</router-link>
            </li>
            <li>
              <router-link class="" to="/Register">Inscription</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
li {
  width: 243.71px;
  height: 40px;
  margin: 10px;

  border-radius: 10px 10px 10px 10px;
}
img {
  width: 100%;
  height: 70%;
}

ul li a {
  text-align: start;
  font-size: 1.5em;
  display: block;
  margin: 5px;

  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
}

#Algo {
  background-color: #bb4646;
  -webkit-box-shadow: 0px 7px 0px 0px #a12c2c;
  box-shadow: 0px 7px 0px 0px #a12c2c;
}
#AlgoSubMenu li {
  background-color: #9b3b3b;
}
#DevWeb {
  background-color: #4691bb;
  -webkit-box-shadow: 0px 7px 0px 0px #1e6995;
  box-shadow: 0px 7px 0px 0px #1e6995;
}
#DevWebSubMenu li {
  background-color: #12567e;
}
#Connect {
  background-color: #e9b729;
  -webkit-box-shadow: 0px 7px 0px 0px #c99d24;
  box-shadow: 0px 7px 0px 0px #c99d24;
}
#ConnectSubMenu li {
  background-color: #cc9f23;
}
#DevObj {
  background-color: #178c3f;
  -webkit-box-shadow: 0px 7px 0px 0px #46bb6e;
  box-shadow: 0px 7px 0px 0px #178c3f;
}
#DevObjSubMenu li {
  background-color: #46bb6fa8;
}
.subMenu {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

ul li a:hover {
  transition: 0.5s;
  opacity: 0.2;
  color: white;
}

ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
}
</style>