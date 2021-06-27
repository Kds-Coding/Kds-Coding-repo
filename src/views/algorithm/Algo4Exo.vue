<template>
  <AlgoHeader>
    <h2 id="HeaderSubTitle">Exercice - La boucle For !</h2>
  </AlgoHeader>
      
      <br/>
      <div id="BouttonContainer"></div>
  <div id="AlgoConteneur" class="CourseContainer">
         <br/>
    <div class="container CoursePage">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>Quiz - la boucle for</h1>
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
                  <img :src="require(`../../../public/img/exercises/${element.myImage}`)" />
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
                  Recommencer 
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
  
</template>

<script>
import AlgoHeader from "@/components/common/AlgoHeader.vue";

export default {
  components: {
    AlgoHeader,

  },
  

  data() {
    return {
      questions: [
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 3 à 12 et augmentant de 1",
          myImage: "q1.png",
          suggestions: [
            { suggestion: "Vrai", correct: true },
            { suggestion: "Faux" },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 1 à 15 et augmentant de 2",
          myImage: "q2.png",
          suggestions: [
            { suggestion: "Vrai", correct: true },
            { suggestion: "Faux" },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 1 à 18 et augmentant de 3",
          myImage: "q3.png",
          suggestions: [
            { suggestion: "Vrai" },
            { suggestion: "Faux", correct: true },
          ],
        },
        {
          question:
            "Dans cette boucle for, les valeurs du compteur vont de 2 à 10 et augmentant de 1",
          myImage: "q4.png",
          suggestions: [
            { suggestion: "Vrai" },
            { suggestion: "Faux", correct: true },
          ],
        },
      ],

      a:0,
      b:1,
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


.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.container-quiz {
  display: flex;
  width: 65%;
  height: 85%;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
  flex-flow: column;
  text-align: center;
  border: 1px solid #BB4646;
  border-radius: 10px;
  background-color: white;
}
.quiz-header {
  display: flex;
  width: 100%;
  height: 20%;
  padding: 1%;
  border-bottom: 1px solid #BB4646;
  justify-content: center;
  background-color: #BB4646;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
}
.quiz-main {
  display: flex;
  width: 100%;
  height: 70;
  flex-flow: column;
  margin: auto;
  padding: 3% 5% 1% 5%;
}
.quiz-footer {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #BB4646;
  background-color: #BB4646;
  border-radius: 0px 0px 10px 10px;
  padding: 2%;
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
  align-items: center;
  justify-content: center;
}
.box-suggestions ul li {
  list-style: none;
  line-height: 2;
  border: 1px solid #849494;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
}
.box-suggestions ul li:hover {
  background-color: #e7eae0;
}

.endp p {
  text-align: center;
}

.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #A12C2C;
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
  padding-bottom: 5%;
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
.quiz-header h1{
   color: white;
}
</style>