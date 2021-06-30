<template>
  <WebHeader>
    <h2 id="HeaderSubTitle">CHAPITRE 2 - Arts plastiques !</h2>
    <p class="HeaderTitleText text-center">
      Introduction à la personnalisation de page web
    </p>
  </WebHeader>
  <div id="WebConteneur" class="CourseContainer">
    <br>
    <div class="container CoursePage">
      <p>
        Il est possible à tout moment de dicter le comportement et l'apparence
        de vos objets, on appele ses règles le style appliqué à un ou plusieurs
        éléments!<br>
        Le style est défini dans son propore fichier de type ".css", il peut
        également être ajouté au sein de tes instructions HTML mais c'est très
        déconseillé.<br>
        Le style est décomposé entre 2 accolades: "{" et "}", qui sont précédées
        du nom de l'élément modifié.
      </p>
      <div class="col-lg-12 subTitle">
        <h1>1. Quelques règles d'apparence</h1>
      </div>
      <p>
        • "color"<br>
        cet attribut détermine la couleur du texte au sein d’un élément.<br>
        • "background-color"<br>
        cet attribut détermine la couleur de l'arrière- plan d'un élément.<br>
        • "height" et "width"<br>
        ces attributs déterminent respectivement la hauteur et largeur d’un 
        élément.
      </p>
      <div class="col-lg-12 subTitle">
        <h1>2. Quelques règles de forme</h1>
      </div>
      <p>
        • "text-align"<br>
        cet attribut permet de définir la façon dont le texte au sein d’un 
        élément doit être présenté.<br>
        • "margin" et "padding"<br>
        ces attributs décident respectivement d’un écart fait par rapport aux 
        éléments voisins et de celui imposé aux éléments imbriqués (texte ou 
        objet HTML).
      </p>
      <div class="container text-center w-25">
        🖥️❤️⌨️
      </div>
    </div>
  </div>
  <Footer>
    <Banner
      rectColor="#46BB6E"
      pathColor="#178C3F"
      height="250px"
      width="100%"
      class="col-lg-12"
      viewBox="0 0 1900 250"
    >
      <div class="centerLink">
        <h1 class="footerLink">EXERCICE</h1>
        <Arrow
          arrowTransform="rotate(90)"
          @click="() => $router.push('/web/exercice2')"
        ></Arrow>
      </div>
    </Banner>
  </Footer>
</template>

<script>
import WebHeader from "@/components/common/WebHeader.vue";
import Footer from "@/components/common/Footer.vue";
import Banner from "@/assets/svg/Headers/bannerObj.vue";
import Arrow from "@/assets/svg/icons/buttons/arrow.vue";

export default {
  components: {
    WebHeader,
    Footer,
    Banner,
    Arrow,
  },
};
</script>

<style>
.codeContainer {
  display: flex;
  flex-direction: column;
  background-color: #434343;
  color: #db880d;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 1.5em;
  margin-left: 10px;
}

.CourseContainer p {
  margin: 30px;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.7em;
}
</style>