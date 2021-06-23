<template>
  <AlgoHeader>
    <h2 id="HeaderSubTitle">Cours 1 - Intro à l'algo !</h2>
    <p class="HeaderTitleText">
      Ce cours va te permettre de savoir à quoi ça sert et en quoi est-ce utile
      l'algorithmie dans la programmation et d'entrer doucement dans la logique
      d'un programme.
    </p>
  </AlgoHeader>
<section class="container">
      <div class="first">
          <p>
            Bienvenue dans ce premier cours dédié à l’algorithmie. Nous allons ici étudier l’algorithmie dans ses bases. Afin de te permettre à toi,
            de comprendre, lire et écrire des algorithmes simples. 
            <br/>
            Tu t’inquiètes car tu trouves cela trop difficile ? Ne t’en fais pas ! La pratique est la clé ! Plus tu t’entraîneras à lire et comprendre les algorithmes et plus ça sera simple pour toi. Allez, il est temps de s’y mettre ensemble ! 
            <br/>
            Mais commençons par le commencement et posons-nous la question: Qu'est-ce que c'est qu'un algorithme ? 
          </p>      
      </div>

      <div class="second">    
      <p> L’algorithmie c’est l’ensemble de techniques et de règles permettant de créer un algorithme, c’est comme l’étude des langues.
          Chaque langue est différente que ce soit ses mots ou encore les prononciations des lettres mais toutes les langues ont des points communs:
          des noms, des verbes, des adverbes ou encore même des déterminants pour ne citer qu’eux. 
          C’est la même chose pour les algorithmes, si tu comprends les algorithmes et l’algorithmie alors tu pourras comprendre
          et étudier n’importe quel langage de programmation (et oui, il y en a plusieurs en fonction des besoins et des avancées technologiques !). 
          Tu ne comprendras pas tout certes, car chaque langage est unique mais il te sera de plus en plus facile et rapide d’en apprendre de nouveau 
          en fonction de tes goûts et de tes besoins.
          <br/>
          <br/>
          C’est bien beau de savoir ce qu’est l’algorithmie mais à quoi ça sert et où est-ce utilisé ? 
          Si tu es sur ce site c’est que tu as l’envie d’en savoir plus .
          L’algorithmie est absolument partout ! Et oui, il est bien plus présent que tu ne le penses !
          Que ce soit l’ordinateur que tu utilises en ce moment, ta console de jeux (voire plusieurs si tu es un petit chanceux),
          les tablettes, les téléphones mais ça ne s’arrête pas là ! On a parlé des objets que tout le monde utilise mais par exemple
          les feux rouges utilisent aussi l’algorithmie ! Bref, tout ce qui est informatique utilise forcément l’algorithmie 
          (oui oui, même le site là où tu trouves !) car sans cela, nous ne pourrons pas programmer.
          <br/>
          <br/>
          C’est bien, on 	a parlé  d’algorithmie et de quoi ça sert mais ce que tu attends c’est de mettre la main à la pâte, non ? (surtout certains dont je suis sûr, ont sauté toutes les explications ;))
          <br/>
          Et bien voilà à quoi ça ressemble :
      </p>
      </div>
      <div id="Algopseudo" class="img">
      <img src="@/assets/Algo.svg" alt="" witdh= "240" height="320"/>
      <br>
      </div>
       <div class="third">
         <p>
            Ça a l’air compliqué n’est-ce pas ? Ne t’inquiètes pas, nous sommes là pour te l’expliquer !
            Le sens de lecture est le même, de gauche à droite et de haut en bas mais tu ne remarques pas quelque chose ?
            Et oui, les programmes essaient de se lire plus de haut en bas que de gauche à droite ! C’est quelque chose que 
            tous les développeurs font (en même temps c’est plus facile de descendre une page que de la faire bouger horizontalement).
            Tu te dis peut-être que ça va être compliqué à lire ? Les développeurs ont pensé à tout donc ne t’en fais pas pour ça,
            tu le découvriras plus tard.
            <br/>
            <br>
            L’algorithme est séparé en 2 parties distinctes, la partie déclarations qui sert à déclarer les variables et les constantes
            dont tu auras besoin dans ton programme (nous reviendrons là-dessus dès la prochaine leçon). La dernière partie est  la partie instruction,
            elle permet d’écrire le programme. Nous allons nous concentrer là-dessus.
            <br>
            <br>
            Tout d’abord chaque ligne contient le mot “AFFICHE”, bizarre n’est-ce pas ? C’est juste pour demander à l’ordinateur qu’il affiche le résultat,
            comme sur ta calculatrice.
            Ce qu’il y a entre parenthèses est ce que l’on va afficher donc le résultat des calculs, les deux premières lignes ne posent pas problème. 
            <br>
            Mais un inconnu arrive, que veut dire “*” ? C’est juste le symbole de la multiplication qu’on utilise en programmation. 
            <br>
            Le “/” est le symbole de la division décimale, il n’y a pas de reste et le résultat peut avoir une virgule.
            <br>
            Le “%” va permettre d’afficher le reste de la division. Cela sera donc une division euclidienne.
            Cela peut être utile si tu souhaites savoir si ce que tu divises est un nombre pair ou non.
            <br>
            Ensuite viens le texte, comme tu peux le voir pour déclarer au programme que tu veuilles écrire du texte et non des commandes, il faut utiliser 
            les guillemets !
            <br>
            Il n’y a pas de limites de caractères hormis la limite de la mémoire donc tu peux marquer une lettre voire même une ou plusieurs phrases !
            <br>
            <br>
            Et bien voilà, tu as réussi à comprendre ton premier algorithme ! Si tu n’as pas compris la leçon, n’hésite pas à la relire
            (et à demander aux gens qui s’occupent de toi de t’expliquer).
            En bas de la leçon, il y a quelques exercices avec du code différent.
            C’est un bon moyen de t’entraîner si tu le souhaites et si tu te sens à l’aise, tu peux passer à la prochaine leçon
            <br>
            <br>
            J’espère qu’on se reverra à la prochaine leçon !
          </p>
       </div>
  </section>

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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

p{
    font-family: 'Roboto Mono', monospace;
}
.img {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>