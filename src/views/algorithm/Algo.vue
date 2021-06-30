<template>
  <AlgoHeader id="AlgoHeader">
    <h2 id="HeaderSubTitle">Cours et exercices</h2>
    <Discover></Discover>
  </AlgoHeader>
  <div id="AlgoConteneur" class="CourseContainer">
    <br />
    <div class="container CoursePage">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>Cours</h1>
      </div>
      <article class="col-lg-10 course">
        <div class="medal">
          <BronzeMedal width="275.232143" height="275.232143"></BronzeMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Cours 1 - Intro à l'algo !</h1>
          <p>
            Ce cours va te permettre de savoir à quoi ça sert et en quoi est-ce
            utile l'algorithmie dans la programmation. Elle te permet d'entrer doucement dans
            la logique d'un programme.
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#BB4646"
            @click="() => $router.push('/algo/course1')"
          ></Play>
        </div>
      </article>
      <article class="col-lg-10 course">
        <div class="medal">
          <BronzeMedal width="275.232143" height="275.232143"></BronzeMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Cours 2 - Les variables</h1>
          <p>
            Ce cours va te permettre de t'initier à la programmation avec l'élement le plus important: la variable !
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#BB4646"
            @click="() => $router.push('/algo/course2')"
          ></Play>
        </div>
      </article>
      <article class="col-lg-10 course">
        <div class="medal">
          <BronzeMedal width="275.232143" height="275.232143"></BronzeMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>cours 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#BB4646"
            @click="() => $router.push('/algo/course3')"
          ></Play>
        </div>
      </article>

      <article class="col-lg-10 course">
        <div class="medal">
          <SilverMedal width="275.232143" height="275.232143"></SilverMedal>
        </div>
        <div class="content">
          Niveau : Moyen
          <h1>cours 4 - Les boucles !</h1>
          <p>
            Ce cours va te permettre d'avoir un aperçu d'un des élements les
            plus important de la programmation: les boucles !
          </p>
        </div>
        <div class="play">
          <Play
            circleColor="#BB4646"
            @click="() => $router.push('/algo/course4')"
          ></Play>
        </div>
      </article>
      <div class="container-fluid text-center" style="margin: 20px">
        <Arrow arrowTransform="rotate(270)" target="AlgoHeader"></Arrow>
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
          <BronzeMedal width="125.232143" height="125.232143"></BronzeMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Exercice 1 : Quiz - les boucles for</h1>
        </div>
        <div class="play">
          <Play 
            circleColor="#BB4646"
            @click="() => $router.push('/algo/QuizAlgo')">
          </Play></div>
      </article>
      <article class="col-lg-10 excercise">
        <div class="medal">
          <BronzeMedal width="125.232143" height="125.232143"></BronzeMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Exercice 2 :Lorem ipsum dolor sit amet</h1>
        </div>
        <div class="play"><Play circleColor="#BB4646"></Play></div>
      </article>
    </div>
    <div class="container-fluid text-center" style="margin: 20px">
      <Arrow arrowTransform="rotate(270)" target="AlgoConteneur"></Arrow>
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
      rectColor="#4691BD"
      pathColor="#1E6995"
      height="100%"
      width="100%"
      class="col-lg-6"
    >
      <div class="centerLink">
        <h1 class="footerLink">DEVELOPPEMENT WEB</h1>
        <Arrow
          arrowTransform="rotate(0)"
          @click="() => $router.push('/web') "
          
        ></Arrow>
      </div>
    </Banner>
  </Footer>
</template>

<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";
import Discover from "@/components/common/Discover.vue";
import Footer from "@/components/common/Footer.vue";
//import GoldMedal from "@/assets/svg/icons/medal/gold-medal";
import SilverMedal from "@/assets/svg/icons/medal/silver-medal";
import BronzeMedal from "@/assets/svg/icons/medal/bronze-medal";
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";
import Banner from "@/assets/svg/Headers/bannerObj.vue";
import Arrow from "@/assets/svg/icons/buttons/arrow.vue";
import Play from "@/assets/svg/icons/buttons/play_circle_filled.vue";

export default {
  components: {
    AlgoHeader,
    Discover,
   // GoldMedal,
    SilverMedal,
    BronzeMedal,
    Avatar1,
    Banner,
    Footer,
    Arrow,
    Play,
  },
};
</script>

<style lang="scss">
</style>