<template>
  <WebHeader>
    <h2 id="HeaderSubTitle">CHAPITRE 1 - Les bases !</h2>
    <p class="HeaderTitleText text-center">
      Introduction aux différents éléments composant une page web
    </p>
  </WebHeader>
  <div id="WebConteneur" class="CourseContainer">
    <br>
    <div class="container CoursePage">
      <h3><i>Qu'est-ce qu'une page web?</i></h3>
      <br>
      <p>
        Avant tout c’est un fichier texte doté de l’extension “.html”!
      </p>
      <h3><i>Qu'est-ce qu'un fichier html?</i></h3>
      <br>
      <p>
        C’est un fichier comprenant du texte et interprété par un navigateur 
        internet comme une suite d’instructions définissant l’apparence et la 
        structure d’une page web!
        <br>
        Il est rédigé à l’aide de balises qui disposent de caractéristiques 
        prédéfinies régissant leurs comportement et aspect visuel, selon ce 
        format:
      </p>
      <div class="codeContainer">
        <span>&#60;balise&#62;</span>
        <span style="margin-left:30px">texte ET / OU</span>
        <span style="margin-left:30px">&#60;/balise2&#62;</span>
        <span style="margin-left:60px">...</span>
        <span style="margin-left:30px">&#60;/balise2&#62;</span>
        <span>&#60;/balise&#62;</span>
      </div>
      <p>
        On voit donc qu’une balise doit être ouverte puis fermée (avec “/”), 
        sauf exception, et peut contenir du texte ainsi que des balises 
        supplémentaires.
      </p>
      <div class="col-lg-12 subTitle">
        <h1>1. Les balises obligatoires</h1>
      </div>
      <p>
        • &#60;html&#62;<br>
        au sein de cette balise doivent se trouver toutes les autres également 
        de type HTML! Cette précision est nécessaire car le fichier pourrait 
        inclure une balise de script (en autres) qui ne doit donc pas être 
        affichée!<br>
        • &#60;body&#62;<br>
        c’est la première balise enfant de &#60;html&#62;, elle est unique!
      </p>
      <div class="codeContainer">
        <span>&#60;html&#62;</span>
        <span style="margin-left:30px">&#60;body&#62;</span>
        <span style="margin-left:60px">Hello World!</span>
        <span style="margin-left:30px">&#60;body&#62;</span>
        <span>&#60;/html&#62;</span>
      </div>
      <br>
      <div class="col-lg-12 subTitle">
        <h1>2. Les balises communes</h1>
      </div>
      <p>
        • &#60;div&#62;<br>
        elle sert à séparer le contenu de notre page en différent bloc!<br>
        • &#60;h1&#62; - &#60;h6&#62;<br>
        ce sont des balises utiles pour créer des titres aux tailles 
        (décroissantes) variées<br>
        • &#60;b&#62; ou &#60;strong&#62;*<br>
        au sein de ces balises le texte sera <b>gras</b>!<br>
        • &#60;i&#62; - &#60;em&#62;*<br>
        au sein de ces balises le texte sera <i>oblique</i>!<br>
        • &#60;br&#62;<br>
        automatiquement fermée! elle permet  de sauter une ligne!<br>
        * La seconde option peut être interprétée comme un changement de ton par 
        les lecteurs d’écran, utiles pour les personnes malvoyantes 🙂
      </p>
      <div class="col-lg-12 subTitle">
        <h1>3. Les balises communes avec paramètres</h1>
      </div>
      <p>
        • &#60;html&#62;<br>
        au sein de cette balise doivent se trouver toutes les autres également 
        de type HTML! Cette précision est nécessaire car le fichier pourrait 
        inclure une balise de script (en autres) qui ne doit donc pas être 
        affichée!<br>
        • &#60;body&#62;<br>
        c’est la première balise enfant de &#60;html&#62;, elle est unique!
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
          @click="() => $router.push('/web/exercice1')"
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