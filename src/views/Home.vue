<template>
  <header>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore.
    </p>
    <br />
    <br />
    <!-- Prendre des variables scss et faire potentielement un component.-->
    <div class="container">
      <div class="row">
        <article class="col-lg-4">
          <div id="AlgoDiv" class="fondDiv redDiv">
            <div class="blockImg">
              <img src="../../public/img/home/Algorithm.png" alt="" />
            </div>
            <div class="CourseBlock">
              <h1 class="text-center">ALGORITHMIE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              <button
                type="button"
                id="seeMore"
                @click="$router.push('/algo'), scrollToTop()"
              >
                See more
              </button>
            </div>
          </div>
        </article>
        <article class="col-lg-4">
          <div id="WebDevDiv" class="fondDiv blueDiv">
            <div class="blockImg">
              <img src="../../public/img/home/DevWeb.png" alt="" />
            </div>
            <div class="CourseBlock">
              <h1 class="text-center">DEVELOPPEMENT WEB</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button
                type="button"
                id="seeMore"
                @click="$router.push('/web'), scrollToTop()"
              >
                See more
              </button>
            </div>
          </div>
        </article>
        <article class="col-lg-4">
          <div class="fondDiv greenDiv">
            <div id="ObjDevDiv" class="blockImg">
              <img src="../../public/img/home/DevObj.png" alt="" />
            </div>
            <div id="ObjDevDiv" class="CourseBlock">
              <h1 class="text-center">DEV ORIENTE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button type="button" id="seeMore">See more</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Discover from "../components/common/Discover.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: { Discover },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss">
/* une variable couleur*/
$colorAlgo: #a12c2c;
$colorWeb: #1e6995;
$colorObj: #178c3f;

.head img {
  width: 100vh;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 100%;
}
.fondDiv {
  position: relative;
  width: 100%;
  height: 300px;
}
.fondDiv.greenDiv {
  background-color: $colorObj;
}
.fondDiv.redDiv {
  background-color: $colorAlgo;
}
.fondDiv.blueDiv {
  background-color: $colorWeb;
}
.blockImg {
  position: absolute;
  width: 410px;
  height: 409px;
  margin: 20px;
}
.CourseBlock {
  width: 410px;
  height: 233px;
  background: #ffffff;
  top: 56%;
  margin: 20px;
  position: absolute;
  transform: translateY(50%);
}
#AlgoDiv h1 {
  color: $colorAlgo;
}
#ObjDevDiv h1 {
  color: $colorObj;
}
#WebDevDiv h1 {
  color: $colorWeb;
}
article h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2.1em;
  line-height: 135.94%;
  margin: 25px;

  /* identical to box height, or 49px */
  text-align: center;
}
.fondDiv p {
  width: 409px;
  height: 113px;
  left: 972px;
  top: 594px;

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

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
}
#homePage article {
  height: 700px;
}
article img {
  height: 70%;
  width: 100%;
}
#seeMore {
  position: absolute;
  bottom: -30%;
  right: 50%;

  transform: translate(50%);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  #AlgoDiv #seeMore {
    background-color: $colorAlgo;
  }
  #WebDevDiv #seeMore {
    background-color: $colorWeb;
  }
  #ObjDevDiv #seeMore {
    background-color: $colorObj;
  }
}

header .container {
  position: relative;
  z-index: 2;
}
header {
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
}
header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  opacity: 0.5;
  z-index: 1;
}
header .welcome {
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
</style>
