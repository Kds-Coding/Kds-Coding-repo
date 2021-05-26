<!-- C'est dans le fichier app.vue qu'il doit y avoir le header(component), l'overlay et le compte-->

<template>
  <div>
    <nav
      class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
    >
      <a class="navbar-brand float-left">
        <router-link class="nav-link" to="/"
          >Test de Vue 3 avec Firebase !</router-link
        >
      </a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav flex-row float-right">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add"
              >Ajouter des Musiques</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/about">Moi!</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <!--  routeur-view permet  d'afficher la view demandé dans le header(routeur-link) -->
      <router-view></router-view>
    </div>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #366fa8;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  li {
    margin-right: 10px;
  }
}
</style>

   