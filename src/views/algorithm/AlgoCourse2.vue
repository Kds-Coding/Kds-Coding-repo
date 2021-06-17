<template>
  <AlgoHeader>
    <h2 id="HeaderSubTitle">cours 4 - Les boucles</h2>
    <p class="HeaderTitleText">
      Comprendre les différentes boucles et différences entre elles
    </p>
  </AlgoHeader>

  <section class="container">
      <div class="first">
          <p>Nous allons aujourd’hui parler d'un concept fondamental en informatique: 
Les boucles. La vie comme la programmation est pleine de routines et de sous-routines répétitives.
 Chaque jour on se réveille et on se brosse les dents. On ne se brosse pas seulement qu'une dent. 
 Nous brossons chaque dent dans notre bouche jusqu'à ce que nous nous brossions toutes les dents.</p>
           <img src="https://i0.wp.com/cdn.dribbble.com/users/1104126/screenshots/3311345/brushteeth.gif" alt="Brushing Teeth Gif"  width="550" />
      </div>
      <div class="second">    
      <p>Nous allons aujourd’hui parler d'un concept fondamental en informatique: 
Les boucles. La vie comme la programmation est pleine de routines et de sous-routines répétitives.
 Chaque jour on se réveille et on se brosse les dents. On ne se brosse pas seulement qu'une dent. 
 Nous brossons chaque dent dans notre bouche jusqu'à ce que nous nous brossions toutes les dents.</p>
    <svg height="100pt" 
    viewBox="0 -1 513.22 513" 
    width="100pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m240.015625 495.46875c-.015625-8.207031 6.175781-15.277344 14.367187-15.886719 100.882813-7.472656 180.6875-92 180.6875-194.734375l32-.882812v.882812c0 119.261719-92.429687 217.421875-209.40625 226.574219-9.457031.734375-17.632812-6.480469-17.648437-15.953125zm0 0" fill="#fbc02d"/><path d="m113.871094 456.878906c-70.222656-40.511718-113.871094-116-113.871094-196.992187 0-34.207031 7.710938-67.953125 22.414062-98.527344 3.875-8.050781 13.601563-11.3125 21.347657-6.867187l1.535156.882812c7.039063 4.046875 9.328125 12.800781 5.824219 20.109375-12.546875 26.210937-19.121094 55.105469-19.121094 84.402344 0 69.597656 37.503906 134.449219 97.855469 169.261719zm0 0" fill="#4dd0e1"/><path d="m437.441406 137.886719c-7.089844 4.144531-16.304687 2.320312-20.960937-4.449219-36.242188-52.65625-96.703125-84.832031-161.054688-84.832031-34.515625 0-68.433593 9.121093-98.097656 26.382812l-16.097656-27.644531c34.546875-20.113281 74.015625-30.738281 114.195312-30.738281 74.621094 0 144.734375 37.152343 186.957031 98.015625 5.394532 7.792968 3.234376 18.496094-4.941406 23.265625zm0 0" fill="#e64a19"/><path d="m204.160156 96.109375h-80v-80c0-8.832031 7.167969-16 16-16 8.832032 0 16 7.167969 16 16v48h48c8.832032 0 16 7.167969 16 16s-7.167968 16-16 16zm0 0" fill="#ff7043"/><path d="m136 464.109375h-80c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h48v-48c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm0 0" fill="#80deea"/><path d="m485.902344 321.34375-33.949219-33.9375-33.953125 33.9375c-6.238281 6.238281-16.382812 6.238281-22.625 0-6.253906-6.257812-6.238281-16.386719 0-22.625l56.578125-56.5625 56.574219 56.5625c6.257812 6.238281 6.257812 16.382812 0 22.625-6.238282 6.253906-16.367188 6.253906-22.625 0zm0 0" fill="#fdd835"/></svg>
    <p>Imaginons que nous ayons écrit des instructions pour préparer des glaces et nous les mettons dans une fonction pratique “preparer glace”. Afin que je puisse les réutiliser chaque fois que j'en ai besoin , je dois préparer trois glaces d'affilée. Il n’y aura pas de problème, je peux juste appeler ma fonction trois fois correctement. Mais si j'avais besoin de préparer cinq, dix ou même mille glaces. Voici où une boucle sauve la journée.</p>
    <div class="icon"><glace></glace></div>
    <p>Une boucle vous permet de continuellement exécuter le même code plusieurs fois ou parcourir une routine jusqu'à ce qu'une condition d'arrêt soit remplie. 

Il existe différents types de boucles et chaque langage de programmation à sa propre syntaxe mais toutes les boucles ont une chose en commun : une condition d'arrêt.</p>

      </div>
       <div class="third">
               <p>La condition est vérifiée à chaque tour et la boucle continue à fonctionner jusqu'à ce que la condition soit atteinte. Laissez-moi vous expliquer avec un exemple de la vie courante :
Si notre objectif est de préparer quatre glaces, la condition d'arrêt de la boucle spécifie de continuer à préparer les glaces jusqu'à ce que quatre glaces aient été préparées. Afin que notre boucle exécute des glaces préparées quatre fois en nous donnant quatre boucles de glaces entièrement préparées.
</p>



       </div>
  </section>

</template>

<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";
import glace from "@/assets/svg/icons/Algo/glace";

export default {
  components: {
    AlgoHeader,
    glace,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

p{
    font-family: 'Roboto Mono', monospace;
}
</style>