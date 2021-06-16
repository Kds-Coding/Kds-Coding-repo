<template>
  <WebHeader id="WebHeader">
    <h2 id="HeaderSubTitle">Cours et exercices</h2>
    <Discover></Discover>
  </WebHeader>
  <div id="WebConteneur" class="CourseContainer">
    <br />
    <div class="container CoursePage">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>Cours</h1>
      </div>
      <article class="col-lg-10 course">
        <div class="medal">
          <GoldMedal width="275.232143" height="275.232143"></GoldMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>cours 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#4691BD"
            @click="() => $router.push('/web/course1')"
          ></Play>
        </div>
      </article>
      <article class="col-lg-10 course">
        <div class="medal">
          <GoldMedal width="275.232143" height="275.232143"></GoldMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>cours 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#4691BD"
            @click="() => $router.push('/web/course1')"
          ></Play>
        </div>
      </article>
      <article class="col-lg-10 course">
        <div class="medal">
          <SilverMedal width="275.232143" height="275.232143"></SilverMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>CHAPITRE 3</h1>
          <p>
            Nous apprendrons comment écrire la structure de notre site avec
            HTML. Cette structure va nous permettre d'accueillir le contenu du
            site.
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#4691BD"
            @click="() => $router.push('/web/course3')"
          ></Play>
        </div>
      </article>
      <div class="container-fluid text-center" style="margin: 20px">
        <Arrow arrowTransform="rotate(270)" target="WebHeader"></Arrow>
        <Arrow arrowTransform="rotate(90)" target="ExerciceConteneur"></Arrow>
      </div>
    </div>

    <div class="container CoursePage" id="ExerciceConteneur">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>Exercices</h1>
      </div>
      <article class="col-lg-10 excercise">
        <div class="medal">
          <GoldMedal width="125.232143" height="125.232143"></GoldMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Exercice 1 :Lorem ipsum dolor sit amet</h1>
        </div>
        <div class="play"><Play circleColor="#4691BD"></Play></div>
      </article>
      <article class="col-lg-10 excercise">
        <div class="medal">
          <GoldMedal width="125.232143" height="125.232143"></GoldMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Exercice 2 :Lorem ipsum dolor sit amet</h1>
        </div>
        <div class="play"><Play circleColor="#4691BD"></Play></div>
      </article>
    </div>
    <div class="container-fluid text-center" style="margin: 20px">
      <Arrow arrowTransform="rotate(270)" target="WebConteneur"></Arrow>
    </div>
  </div>

  <Footer>
    <Banner
      rectColor="#46BB6E"
      pathColor="#178C3F"
      height="100%"
      width="100%"
      class="col-lg-6"
    >
      <div class="centerLink">
        <h1 class="footerLink">DEVELOPPEMENT ORIENTE</h1>
        <Arrow arrowTransform="rotate(180)"></Arrow>
      </div>
    </Banner>

    <Banner
      rectColor="#BB4646"
      pathColor="#A12C2b"
      height="100%"
      width="100%"
      class="col-lg-6"
    >
      <div class="centerLink">
        <h1 class="footerLink">ALGORITHMIE</h1>
        <Arrow
          arrowTransform="rotate(0)"
          @click="() => $router.push('/algo')"
        ></Arrow>
      </div>
    </Banner>
  </Footer>
</template>

<script>
import WebHeader from "@/components/common/WebHeader.vue";
import Discover from "@/components/common/Discover.vue";
import Footer from "@/components/common/Footer.vue";
import GoldMedal from "@/assets/svg/icons/medal/gold-medal";
import SilverMedal from "@/assets/svg/icons/medal/silver-medal";
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";
import Banner from "@/assets/svg/Headers/bannerObj.vue";
import Arrow from "@/assets/svg/icons/buttons/arrow.vue";
import Play from "@/assets/svg/icons/buttons/play_circle_filled.vue";

export default {
  components: {
    WebHeader,
    Discover,
    GoldMedal,
    SilverMedal,
    Avatar1,
    Banner,
    Footer,
    Arrow,
    Play,
  },
};
</script>

<style lang="scss">
#WebConteneur .medal,
#WebConteneur .subTitle {
  background-color: #4691bd;
}
</style>