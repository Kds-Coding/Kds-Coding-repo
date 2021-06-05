<template>
  <nav class="navbar scroller" id="sidebar">
    <ul class="list-unstyled components">
      <div class="sidebar-header">
        <router-link to="/">
          <img src="../../../public/img/icons/log.jpg"
        /></router-link>
      </div>
      <li class="nav-item" id="Algo">
        <a
          data-toggle="collapse"
          href="#AlgoSubMenu"
          role="button"
          aria-expanded="false"
          aria-controls="AlgoSubMenu"
          class="dropdown-toggle"
          >Algorithmie
        </a>
      </li>
      <ul class="collapse list-unstyled subMenu" id="AlgoSubMenu">
        <li>
          <router-link to="/algo/course1">course1</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course2">course2</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course1">course2</router-link>
        </li>
      </ul>

      <li class="nav-item" id="DevWeb">
        <a
          href="#DevWebSubMenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          >Développement web</a
        >
      </li>
      <ul class="collapse list-unstyled subMenu" id="DevWebSubMenu">
        <li>
          <router-link to="/algo/course1">course1</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course2">course2</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course1">course2</router-link>
        </li>
      </ul>
      <li class="nav-item" id="DevObj">
        <a
          href="#DevObjSubMenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          >Dév Objet</a
        >
      </li>
      <ul class="collapse list-unstyled subMenu" id="DevObjSubMenu">
        <li>
          <router-link to="/algo/course1">course1</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course2">course2</router-link>
        </li>
        <li>
          <router-link class="" to="/algo/course1">course2</router-link>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
</script> 

<style>
#sidebar {
  display: flex;

  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #f9f9f9;
  transition: all 0.3s;
}

.sidebar-header img {
  width: 80%;
  position: relative;
  margin-right: 15%;
  margin-bottom: 30%;
}
.sidebar-header {
  width: 100%;
  text-decoration: none;
}
#sidebar ul.components {
  padding: 20px 0;
  margin-right: 1%;
  width: 98%;
  position: absolute;
  top: 0;
}
a[data-toggle="collapse"] {
  position: relative;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar ul li {
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 64px;
  margin-bottom: 5%;
  border-radius: 5px;
  box-shadow: 0px 3px grey;
  height: 5em;
}
#sidebar ul {
  padding-right: 70px;
}

#sidebar ul li a {
  text-align: start;
  font-size: 1.5em;
  display: block;
  margin: 5px;

  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
#sidebar ul li a:hover {
  transition: 0.5s;
  opacity: 0.2;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
}
#sidebar.streth {
  margin-left: -270px;
}
a[data-toggle="collapse"] {
  position: relative;
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

ul ul a {
  font-size: 1.4em !important;
  padding-left: 10px !important;
  color: #f9f9f9;
  text-decoration: none;
}

#Algo {
  background-color: #bb4646;
}
#AlgoSubMenu li {
  background-color: #9b3b3b;
}
#DevWeb {
  background-color: #4691bb;
}
#DevWebSubMenu li {
  background-color: #12567e;
}

#DevObj {
  background-color: #46bb6e;
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
.subMenu li {
  opacity: 0.7;
  border-radius: 10%;
}

.scroller {
  transition: 0.3s;
  width: 20px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: grey transparent;
  scrollbar-width: thin;
}
</style>