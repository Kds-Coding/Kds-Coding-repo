<template>
  <AlgoHeader>
    <h2 id="HeaderSubTitle">Cours 4 - Les boucles !</h2>
    <p class="HeaderTitleText">
      Comprendre les différentes boucles et différences entre elles
    </p>
  </AlgoHeader>

  <div class="contentBx" id="AlgoConteneur">
    <div class="contentv">
      <p>
        Nous allons aujourd’hui parler d'un concept fondamental en informatique:
        Les boucles. La vie comme la programmation est pleine de routines et de
        sous-routines répétitives. Chaque jour on se réveille et on se brosse
        les dents. On ne se brosse pas seulement qu'une dent. Nous brossons
        chaque dent dans notre bouche jusqu'à ce que nous nous brossions toutes
        les dents.
      </p>
      <div class="imgBox">
        <img
          src="https://i0.wp.com/cdn.dribbble.com/users/1104126/screenshots/3311345/brushteeth.gif"
          alt="Brushing Teeth Gif"
          width="550"
        />
      </div>

      <p>
        Nous allons aujourd’hui parler d'un concept fondamental en informatique:
        Les boucles. La vie comme la programmation est pleine de routines et de
        sous-routines répétitives. Chaque jour on se réveille et on se brosse
        les dents. On ne se brosse pas seulement qu'une dent. Nous brossons
        chaque dent dans notre bouche jusqu'à ce que nous nous brossions toutes
        les dents.
      </p>
      <div class="imgBox"><loop></loop></div>
      <p>
        Imaginons que nous ayons écrit des instructions pour préparer des glaces
        et nous les mettons dans une fonction pratique “preparer glace”. Afin
        que je puisse les réutiliser chaque fois que j'en ai besoin , je dois
        préparer trois glaces d'affilée. Il n’y aura pas de problème, je peux
        juste appeler ma fonction trois fois correctement. Mais si j'avais
        besoin de préparer cinq, dix ou même mille glaces. Voici où une boucle
        sauve la journée.
      </p>
      <div class="imgBox"><glace></glace></div>
      <p>
        Une boucle vous permet de continuellement exécuter le même code
        plusieurs fois ou parcourir une routine jusqu'à ce qu'une condition
        d'arrêt soit remplie. Il existe différents types de boucles et chaque
        langage de programmation à sa propre syntaxe mais toutes les boucles ont
        une chose en commun : une condition d'arrêt. <br /><br />La condition
        est vérifiée à chaque tour et la boucle continue à fonctionner jusqu'à
        ce que la condition soit atteinte. Laissez-moi vous expliquer avec un
        exemple de la vie courante : Si notre objectif est de préparer quatre
        glaces, la condition d'arrêt de la boucle spécifie de continuer à
        préparer les glaces jusqu'à ce que quatre glaces aient été préparées.
        Afin que notre boucle exécute des glaces préparées quatre fois en nous
        donnant quatre boucles de glaces entièrement préparées. <br /><br />La
        condition est vérifiée à chaque tour et la boucle continue à fonctionner
        jusqu'à ce que la condition soit atteinte. Laissez-moi vous expliquer
        avec un exemple de la vie courante : Si notre objectif est de préparer
        quatre glaces, la condition d'arrêt de la boucle spécifie de continuer à
        préparer les glaces jusqu'à ce que quatre glaces aient été préparées.
        Afin que notre boucle exécute des glaces préparées quatre fois en nous
        donnant quatre boucles de glaces entièrement préparées.
      </p>
      <div class="imgBox"><algorithm2></algorithm2></div>
      <h2>Boucle For</h2>
      <p>
        Mais il y a une boucle plus puissante et qui s'appelle la boucle for.
        <br /><br />Dans une boucle for, on a une variable ou un compteur et on
        va dire pour notre compteur où il commence, peut-être qu'on veut qu'elle
        commence à zéro. peut-être qu'on veut qu'elle commence à trois. Ensuite
        on choisit quand est-ce qu'on veut qu'il s'arrête. Enfin on choisit par
        quoi on veut compter. Est-ce qu'on veut compter par 1 ? ou est-ce qu'on
        veut compter par autre chose ? Par exemple, on peut compter par cinq.
        <br /><br />Remarque : les deux égal veut dire comparer deux choses pour
        voir si c'est égal.
      </p>
      <div class="imgBox"><forloop></forloop></div>

      <p>
        Voici un exemple: Dans notre boucle for, on a un compteur et on va le
        faire commencer à dix. On veut aussi s'arrêter à 20 et on augmente de 5
        à chaque fois. Et la chose qu’on veut répéter est de boire un verre
        d’eau. Au final on a ce pseudocode:
      </p>
      <div class="imgBox">
        <img src="../../../public/img/forloop.png" alt="forloop" />
      </div>

      <p>
        La boucle passe une fois quand le compteur est égal à 10 puis passe une
        deuxième fois quand le compteur est égal à 15. Et c’est fini parce qu'
        après 15, le compteur passe à 2O et quand on arrive à 20, la boucle est
        obligée de s'arrêter. <br /><br />
        Elle vous laisse choisir votre point de départ, votre point d'arrivée et
        la quantité par laquelle vous comptez, c'est ce qu'on appelle
        l'incrément, c'est comme augmenter, mais on augmente quelque chose de la
        même quantité encore et encore.
      </p>

      <h2>Boucle while</h2>
      <div class="imgBox">
        <div><studyon></studyon></div>
        <div><studyoff></studyoff></div>
      </div>
      <p>
        Imagine toi que tu es en train de lire un livre. Ici la condition est
        vraie dans le cas où la lumière est allumée. Cette dernière phrase est
        traduite en pseudocode par “while( lumière allumée = true)“. Tu
        continues de lire le livre aussi longtemps que la lumière est allumée.
        Donc si quelqu'un vient et éteint cette lumière vous ne pouvez pas lire
        ce livre donc ou tu arrêteras de lire ce livre. Dans ce cas, nous
        utilisons la boucle while :
      </p>
      <div class="imgBox">
        <img src="../../../public/img/whileloop.png" alt="whileloop" />
      </div>
      <p>
        Les boucles nous permettent de dire à l'ordinateur par où commencer et
        fournissent une condition sur laquelle s'arrêter tout en quelques lignes
        de code faciles à lire.
      </p>
      <div class="endp">
        <p>
          <br />Tu as beaucoup appris bravo! Tu as beaucoup de potentiel 😎 Au
          prochain cours, tu apprendras à utliser des fonctions, à très vite!<br />🖥❤️⌨️
        </p>
      </div>
      <br/>
    </div>
    <router-view></router-view>
  </div>
  <Footer>
    <Banner
      rectColor="#BB4646"
      height="100%"
      width="100%"
      class="col-12"
      
    >
      <div class="centerLink">
        <h1 class="footerLink">Quiz sur la boucle for</h1>
        <Arrow
          arrowTransform="rotate(90)"
        @click="() => $router.push('/algo/QuizAlgo')"
        ></Arrow>
      </div>
    </Banner>
  </Footer>
</template>

<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";
import glace from "@/assets/svg/icons/Algo/glace.vue";
import algorithm2 from "@/assets/svg/icons/Algo/algorithm_illustration.vue";
import forloop from "@/assets/svg/icons/Algo/for_loop.vue";
import studyon from "@/assets/svg/icons/Algo/study_on.vue";
import studyoff from "@/assets/svg/icons/Algo/study_off.vue";
import loop from "@/assets/svg/icons/Algo/loop.vue";
import Banner from "@/assets/svg/Headers/BannerExo.vue";
import Footer from "@/components/common/Footer.vue";
import Arrow from "@/assets/svg/icons/buttons/arrow.vue";


export default {
  components: {
    AlgoHeader,
    glace,
    algorithm2,
    forloop,
    studyon,
    studyoff,
    loop,
    Footer,
    Banner,
    Arrow,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Ubuntu:wght@500&display=swap");


.contentBx p {
  /* font-family: 'Roboto Mono', monospace; */
  font-size: 1.5rem;

  font-family: "Bree Serif", serif;
  color: var(--back);
  font-weight: 300;
  text-align: justify;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.endp p {
  text-align: center;
}
.contentBx h2 {
  font-family: "Ubuntu", sans-serif;
  padding: 3.75rem 0;
  font-size: 3.4375rem;
  font-weight: 500;
  color: var(--back);
  letter-spacing: 2px;
  border-top: 1px solid rgb(33, 37, 41, 0.2);
  border-bottom: 1px solid rgb(33, 37, 41, 0.2);
  text-align: center;
  line-height: 1;
  margin-bottom: 3.75rem;
}

.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgBox .content .contentBx {
  min-height: 400px;
}
.contentBx {
  position: relative;
  z-index: 1;
  background: var(--white);
  padding-top: 50px;
  padding-left: 30%;
  padding-right: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>