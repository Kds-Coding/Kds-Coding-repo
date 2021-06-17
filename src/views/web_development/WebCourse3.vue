<template>
  <WebHeader>
    <h2 id="HeaderSubTitle">CHAPITRE 3 - La toile comme disent les jeunes !</h2>
    <p class="HeaderTitleText text-center">
      <bold>Comprendre la structure d'une page web.</bold>
      Nous apprendrons comment écrire la structure de notre site avec HTML.
      Cette structure va nous permettre d'accueillir le contenu du site.
    </p>
  </WebHeader>
  <div id="BouttonContainer"></div>
  <div id="WebConteneur" class="CourseContainer">
    <br />
    <div class="container CoursePage">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>1 . La balise HTML</h1>
      </div>
      <dropBlank></dropBlank>
    </div>
  </div>
</template>

<script>
import WebHeader from "@/components/common/WebHeader.vue";
import dropBlank from "@/components/exercices/dropTheBlank.vue";
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";

export default {
  components: {
    WebHeader,
    dropBlank,
    Avatar1,
  },
};
</script>

<style>
</style>