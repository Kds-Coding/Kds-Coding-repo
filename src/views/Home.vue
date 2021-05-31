<template>
  <img src="../../public/header.png" class="img-fluid" alt="" />

  <div class="home">
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
          <div class="fondDiv redDiv">
            <div id="AlgoDiv" class="CourseBlock">
              <img src="../../public/Algorithm.png" alt="" />
              <h1 class="text-center">ALGORITHMIE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button type="button" id="seeMore">See more</button>
            </div>
          </div>
        </article>
        <article class="col-lg-4">
          <div class="fondDiv blueDiv">
            <div id="WebDevDiv" class="CourseBlock">
              <img src="../../public/DevWeb.png" alt="" />
              <h1 class="text-center">DEVELOPPEMENT WEB</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button type="button" id="seeMore">See more</button>
            </div>
          </div>
        </article>
        <article class="col-lg-4">
          <div class="fondDiv greenDiv">
            <div id="ObjDevDiv" class="CourseBlock">
              <img src="../../public/DevObj.png" alt="" />
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
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
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
  height: 200px;
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
.CourseBlock {
  position: absolute;
  width: 100%;
  height: 390px;
  background-color: #f9f9f9;
  margin: 17px;
}
#AlgoDiv h1 {
  font-size: 2.1em;

  color: $colorAlgo;
  margin: 25px;
}
#ObjDevDiv h1 {
  font-size: 2.1em;

  color: $colorObj;
  margin: 25px;
}
#WebDevDiv h1 {
  font-size: 2.1em;
  color: $colorWeb;
  margin: 25px;
}
.fondDiv p {
  color: #4691bb;
}
p,
h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
article {
  height: 600px;
}
article img {
  height: 70%;
  width: 100%;
}
#seeMore {
  position: absolute;
  bottom: -20%;
  right: 50%;
  transform: translate(50%, -10%);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
#AlgoDiv #seeMore {
  background-color: $colorAlgo;
}
#WebDevDiv #seeMore {
  background-color: $colorWeb;
}
#ObjDevDiv #seeMore {
  background-color: $colorObj;
}
</style>
