<template>
  <AlgoHeader>
    <h2 id="HeaderSubtitle">cours 2 - Les variables</h2>
    <p class="HeaderTitleText">
      Passons à présent au deuxième chapitre de notre cours d'algorithmie qui
      concerne les variables, un élément central dans tout algorithme digne de
      ce nom.
    </p>
  </AlgoHeader>
  
  <div class="MainContent">
    <h3>Qu'est-ce qu-une variable<h3>
    <p>
      Une variable est un symbole dont le rôle est de stocker les divers éléments
      sur lesquels agit l'algorithme et de les associer à un nom. Pour faire plus
      simple, on peut considérer une variable comme un conteneur dans lequel 
      serait stocké l'élément. <br></br>
      Exemple : <br></br>
    </p>
  </div>
</template>
 
<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";

export default {
  components: {
    AlgoHeader,
  },
};
</script>

<style>
.MainContent p {
  font-size : 1.5rem;
  font-family : "Bree Serif", serif;
  font-weight : 300;
  color : var(--back);
  display : flex;
  }
</style>
