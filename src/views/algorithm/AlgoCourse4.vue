<template>
  <AlgoHeader>
    <h2 id="HeaderSubTitle">cours 4 - Les boucles !</h2>
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
          prochain cours, tu apprendras à modifier l’apparence des éléments à ta
          guise, à très vite!<br />🖥❤️⌨️
        </p>
      </div>
      <div id="BouttonContainer"></div>
      <br />
      <div class="container CoursePage" id="ExerciceConteneur">
        <div class="col-lg-12 subTitle">
          <div class="icon"><Avatar1></Avatar1></div>
          <h1>Quiz - la boucle for !</h1>
        </div>
        <br />
        <br />
        <p>
          * la boucle commence à la parenthèse ouvrante par "[" <br />* Le
          passage de la boucle est représenté par un cercle autour d'un chiffre.
          <br />* la boucle s'arrête à la parenthèse fermentant par "]" <br />
          Voici un exemple pour comprendre l’exercice :
        </p>
        <div class="imgBox">
          <img src="../../../public/img/exercises/q0.png" alt="" />
        </div>
        <div class="endp">
          <p>à toi de jouer !</p>
        </div>

        <div class="container-app">
          <div class="container-quiz">
            <div class="quiz-header">
              <h1>Quiz</h1>
            </div>
            <div
              class="quiz-main"
              v-for="(element, index) in questions.slice(a, b)"
              :key="index"
              v-show="quiz"
            >
              <div class="box-question">
                <h3>Question {{ b }}/{{ questions.length }}</h3>
                <p>{{ element.question }}</p>
                <div>
                  <img :src="`../../../public/img/exercises/${nImage}.png`" />
                </div>
              </div>
              <div class="box-suggestions">
                <ul>
                  <li
                    v-for="(item, index) in element.suggestions"
                    :key="index"
                    :class="select ? check(item) : ''"
                    @click="selectResponse(item)"
                  >
                    {{ item.suggestion }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-score" v-if="score_show">
              <h3>Ton score est de</h3>
              <h3>{{ score }}/{{ questions.length }}</h3>
              <div class="btn-restard">
                <button @click="restartQuiz">
                  Recommencer <i class="fas fa-sync-alt"></i>
                </button>
              </div>
            </div>
            <div class="quiz-footer">
              <div class="box-button">
                <button @click="skipQuestion">Passer</button>
                <button @click="nextQuestion">Suivant</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";
import glace from "@/assets/svg/icons/Algo/glace.vue";
import algorithm2 from "@/assets/svg/icons/Algo/algorithm_illustration.vue";
import forloop from "@/assets/svg/icons/Algo/for_loop.vue";
import studyon from "@/assets/svg/icons/Algo/study_on.vue";
import studyoff from "@/assets/svg/icons/Algo/study_off.vue";
import loop from "@/assets/svg/icons/Algo/loop.vue";
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";

export default {
  components: {
    AlgoHeader,
    glace,
    algorithm2,
    forloop,
    studyon,
    studyoff,
    loop,
    Avatar1,
  },
  data() {
    return {
      questions: [
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 3 à 12 et augmentant de 1",
          myImage: "q1",
          suggestions: [
            { suggestion: "Vrai", correct: true },
            { suggestion: "Faux" },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 1 à 15 et augmentant de 2",
          myImage: "q2",
          suggestions: [
            { suggestion: "Vrai", correct: true },
            { suggestion: "Faux" },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 1 à 18 et augmentant de 3",
          myImage: "q3",
          suggestions: [
            { suggestion: "Vrai" },
            { suggestion: "Faux", correct: true },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 2 à 10 et augmentant de 1",
          myImage: "q4",
          suggestions: [
            { suggestion: "Vrai" },
            { suggestion: "Faux", correct: true },
          ],
        },
      ],

      a: 0,
      b: 1,
      select: false,
      score: 0,
      quiz: true,
      score_show: false,
    };
  },
  methods: {
    selectResponse(e) {
      this.select = true;

      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.select = false;
      }
    },
    skipQuestion() {
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Ubuntu:wght@500&display=swap");

.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.container-quiz {
  display: flex;
  width: 60%;
  height: 85%;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
  flex-flow: column;
  text-align: center;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.quiz-header {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: Apx solid #e7eae0;
  justify-content: center;
  background-color: #e7eae0;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
}
.quiz-main {
  display: flex;
  width: 100%;
  height: 70;
  flex-flow: column;
  margin: auto;
}
.quiz-footer {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px 0px 10px 10px;
}
.box-question {
  margin-top: 20px;
}
.box-question p {
  margin-top: 20px;
}
.box-suggestions {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
}
.box-suggestions ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}
.box-suggestions ul li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
}
.box-suggestions ul li:hover {
  background-color: #e7eae0;
}
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
.box-button {
  display: flex;
  width: 100%;
}
.box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: #a09f9ff5;
}
.box-suggestions ul li.correct {
  border: 1px solid rgb(22, 24, 22);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}
.box-suggestions ul li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}
.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}
.box-score h3 {
  margin-top: 5%;
}
.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}
.btn-restard button {
  width: 150px;
  height: 35px;
  outline: white;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: rgb(106, 128, 202);
}
</style>