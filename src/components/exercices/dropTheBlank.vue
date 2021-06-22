<template>
  <div class="col-lg-12 subTitle">
    <!--<div class="icon"><Avatar1 @click="check"></Avatar1></div>-->
    <h1>Remplis le texte !</h1>
  </div>
  <Panel id="panel-1">
    <Card
      v-for="item in listOne"
      :key="item.title"
      :id="item.title"
      draggable="true"
    >
      {{ item.value }}
    </Card>
  </Panel>
  <slot name="TextContainer"> </slot>

  <div class="d-flex justify-content-between">
    <button @click="showModal" class="correction">Correction</button>
    <!--<Arrow arrowTransform="rotate(270)" target="HeaderSubTitle"></Arrow>-->
  </div>

  <button type="button" class="btn" @click="showModal">Open Modal!</button>

  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header> </template>
    <template v-slot:body>
      <p>
        Lorem ipsum elit dolor sit amet, consectetur dolor elit, sed do eiusmod
        tempor magna incididunt ut labore et dolore incididunt magna aliqua. Ut
        enim ad minim magna veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal" class="correction">Recommencer</button>
    </template>
  </Modal>
</template>

<script>
import Card from "@/components/exercices/Card.vue";
import Panel from "@/components/exercices/Panel.vue";
import Modal from "@/components/common/ModalWindow.vue";
export default {
  components: {
    Card,
    Panel,
    Modal,
  },
  props: {
    answers: Object,
    rightAnswers: Object,
  },
  computed: {
    listOne() {
      return this.$props.answers.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },

  methods: {
    check() {
      const text = document.getElementById("textFill");
      const boards = text.getElementsByClassName("answer");
      var size = boards.length - 1;
      for (var i = 0; i < size; i++) {
        if (boards[i].querySelector(".drag-el") === null) {
          return false;
        }
      }
      return true;
    },
    showModal() {
      if (this.check()) {
        this.isModalVisible = true;

        const modalBox = document.getElementById("Modal");
        const modalHeader = document.getElementById("modalTitle");
        modalHeader.innerHTML = "";
        const text = document.getElementById("textFill");
        const modalBody = document.getElementById("modalDescription");
        modalBox.style.display = "block";

        //const modalFooter = document.getElementById("modalFooter");

        modalBody.classList.add("CodeStructure");
        modalBody.innerHTML = text.innerHTML;
        const listAnswer = text.getElementsByClassName("answer");
        const trueList = this.$props.rightAnswers;
        let count = 0;
        let size = listAnswer.length;
        for (var i = 0; i < size; i++) {
          var goodAnswer = listAnswer[i].innerText;
          let board = modalBox.getElementsByClassName("drag-el")[i];

          if (goodAnswer == trueList[i]) {
            ++count;
            board.style.backgroundColor = "green";
          } else {
            board.style.backgroundColor = "red";
          }
        }
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var h2_2 = document.createElement("h2");

        // var p = document.createElement("p");

        //header part text
        var texth1 = document.createTextNode(count + "/" + size);
        var texth2;

        if (count > size / 2 && count != size) {
          texth2 = document.createTextNode(
            "Bien tenté, essaie encore pour améliorer ton résultat."
          );
        } else if (count < size / 2) {
          texth2 = document.createTextNode("Il faut que tu revoie ce cours !");
        } else if ((count = size)) {
          texth2 = document.createTextNode(
            "Bravo ! tu as compris toutes les bases"
          );
        }

        h2.appendChild(texth2);

        h1.appendChild(texth1);
        modalHeader.appendChild(h1);
        modalHeader.appendChild(h2);
        var texth2_2 = document.createTextNode("Réponses aux questions :");
        h2_2.appendChild(texth2_2);
        modalHeader.appendChild(h2_2);
      } else {
        alert("Tu dois remplir toutes les cases !");
      }
    },
    closeModal() {
      this.isModalVisible = false;
      document.location.reload();
    },
  },
};
</script>

<style>
.textStructure {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 1.5em;
  align-items: center;
  margin-bottom: 50px;
}
.CodeStructure {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 1.5em;
  align-items: start;
  margin-bottom: 50px;
}

.lineStructure {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
}
.correction {
  background: #4691bd;
  border-radius: 50px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>