<template>
  <header id="HomeHeader">
    <div class="overlay"></div>
    <img src="../../public/img/home/header.png" class="img-fluid" alt="" />

    <div>
      <div class="headerText">
        <h1 class="text-center welcome">
          <span style="color: #1e6995">Bien</span
          ><span style="color: #178c3f">venue </span>
          <span style="color: #a12c2c">à </span>
          <span style="color: #178c3f">K</span>
          <span style="color: #1e6995">IDS </span>
          <span style="color: #a12c2c">CODING</span>
        </h1>
      </div>
      <Discover></Discover>
    </div>
  </header>

  <div class="CoursePage" id="homePage">
    <h2 class="text-center" style="color: #4691bb">Bienvenue</h2>

    <p class="text-center">
      Bienvenue à toi !
      <br />
      Sur ce site tu apprendras les bases de la programmation dans les deux
      directions différentes qui sont la programmation orienté et la
      programmation Web ! Le plus important si tu es un apprenti ou que tu
      découvres ce merveilleux monde de la programmation, la partie
      "Algorithmie" est obligatoire ! Alors lance-toi, c'est le moment ou jamais
      !
    </p>
    <br />
    <br />
    <!-- Prendre des variables scss et faire potentielement un component.-->
    <div class="container">
      <div class="row">
        <article class="col-lg-4" id="">
          <div class="card blockDiv">
            <div class="fond" style="background-color: #a12c2c"></div>

            <img
              class="card-img-top"
              src="../../public/img/home/Algorithm.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h1 class="text-center" style="color: #a12c2c">ALGORITHMIE</h1>
              <p class="card-text text-center">
                Dans ces cours, tu apprendras les bases de la programmation et
                sa logique ! (recommandé pour les débutants)
              </p>
              <button
                type="button"
                id="seeMore"
                @click="$router.push('/algo')"
                style="background-color: #a12c2c"
              >
                En voir plus
              </button>
            </div>
          </div>
        </article>

        <article class="col-lg-4" id="">
          <div class="card blockDiv">
            <div class="fond" style="background-color: #1e6995"></div>

            <img
              class="card-img-top"
              src="../../public/img/home/DevWeb.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h1 class="text-center" style="color: #1e6995">
                DEVELOPPEMENT WEB
              </h1>
              <p class="card-text text-center">
                Durant ces cours, tu vas apprendre à programmer un site web
                petit à petit en apprenant comment cela fonctionne
              </p>
              <button
                type="button"
                id="seeMore"
                @click="$router.push('/web')"
                style="background-color: #1e6995"
              >
                En voir plus
              </button>
            </div>
          </div>
        </article>

        <article class="col-lg-4" id="">
          <div class="card blockDiv">
            <div class="fond" style="background-color: #178c3f"></div>

            <img
              class="card-img-top"
              src="../../public/img/home/DevObj.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h1 class="text-center" style="color: #178c3f">DEV ORIENTE</h1>
              <p class="card-text text-center">
                Durant ces cours, tu vas apprendre à programmer plusieurs petits
                programmes que tu pourras lancer sur ton ordinateur.
              </p>
              <button
                type="button"
                id="seeMore"
                @click="$router.push('/obj')"
                style="background-color: #178c3f"
              >
                En voir plus
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Discover from "@/components/common/Discover.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: { Discover },

  methods: {},
};
</script>
<style lang="scss">
/******************* HEADER STYLE************ */
#HomeHeader {
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
}
#HomeHeader .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  opacity: 0.5;
  z-index: 1;
}
#HomeHeader .welcome {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 102px;
  line-height: 120px;
}
.headerText {
  position: absolute;
  width: 662px;
  height: 167px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  opacity: 0.9;
  text-shadow: 0px 8.5px 8.5px rgba(0, 0, 0, 0.5);
  z-index: 2;
}
/******************* END OF HEADER STYLE************ */

/******************* IMAGE STYLE************ */
.img-fluid {
  max-width: 100%;
  height: 100%;
  width: 100%;
}
.head img {
  width: 100vh;
}

.image-fluid {
  max-width: 100%;
  height: 50%;
}
/******************* END OF IMAGE STYLE************ */

/******************* TEXT STYLE************ */

#homePage article h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2.1em;
  line-height: 135.94%;
  margin: 15px;
  width: 100%;
  /* identical to box height, or 49px */
  text-align: center;
}
#homePage article p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 23.7355px;
  line-height: 32px;
  text-align: center;

  color: #4691bb;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
/*******************END OF TEXT STYLE************ */

/******************* CONTENT STYLE************ */

#homePage article {
  height: 50em;
}
.blockDiv {
  width: 100%;
  height: 80%;
  z-index: 2;
}
.fond {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  z-index: -1;
  margin: -15px;
}

#seeMore {
  position: absolute;
  bottom: -20%;
  right: 50%;

  transform: translate(50%);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
/******************* END OF CONTENT STYLE************ */
</style>
