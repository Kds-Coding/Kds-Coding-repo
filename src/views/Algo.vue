<template>
  <AlgoHeader>
    <h2 id="algoSubTitle">Cours et exercices</h2>
    <Discover></Discover>
  </AlgoHeader>
  <div id="AlgoConteneur">
    <div class="container CoursePage">
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
      </article>
      <article class="col-lg-10 course">
        <div class="medal">
          <SilverMedal width="275.232143" height="275.232143"></SilverMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>cours 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </article>
    </div>

    <div class="container CoursePage" id="conteneur">
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
      </article>
      <article class="col-lg-10 excercise">
        <div class="medal">
          <GoldMedal width="125.232143" height="125.232143"></GoldMedal>
        </div>
        <div class="content">
          Niveau : Facile
          <h1>Exercice 2 :Lorem ipsum dolor sit amet</h1>
        </div>
      </article>
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
    </Banner>
    <h1 class="footerLink">DEVELOPPEMENT ORIENTE</h1>

    <Banner
      rectColor="#4691BD"
      pathColor="#1E6995"
      height="100%"
      width="100%"
      class="col-lg-6"
    >
    </Banner>
    <h1 class="footerLink">DEVELOPPEMENT ORIENTE</h1>
  </Footer>
</template>

<script>
import AlgoHeader from "../components/common/AlgoHeader.vue";
import Discover from "../components/common/Discover.vue";
import GoldMedal from "../components/svg/icons/medal/gold-medal";
import SilverMedal from "../components/svg/icons/medal/silver-medal";
import Avatar1 from "../components/svg/icons/Avatar/Avatar1";
import Banner from "../components/svg/Headers/bannerObj.vue";
import Footer from "../components/common/Footer.vue";

export default {
  components: {
    AlgoHeader,
    Discover,
    GoldMedal,
    SilverMedal,
    Avatar1,
    Banner,
    Footer,
  },
};
</script>

<style lang="scss">
#AlgoConteneur article {
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
  background-color: #bb4646;
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
  background: #bb4646;
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
</style>