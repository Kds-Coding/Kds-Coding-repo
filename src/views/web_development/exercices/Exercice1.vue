<template>
  <div class="container CoursePage">
    <div id="consigne">
      <span>Reproduisez le texte qui suit:</span>
      <div id="box">
        <h1>Citation :</h1>
        "J'adore les <i>bananes</i>!"<br />
        - <b>Donkey Kong</b>
      </div>
    </div>
    <TextaTrous :answers="items" :rightAnswers="goodItems">
      <template v-slot:TextContainer>
        <div class="CodeStructure container codeContainer" id="textFill">
          <span>&#60;html&#62;</span>
          <span style="margin-left: 30px">&#60;body&#62;</span>
          <Board id="board-1" class="answer" style="margin-left: 55px"> </Board>
          <div style="margin-left: 60px" class="lineStructure">
            <Board id="board-2" class="answer"> </Board>
            Citation :
            <Board id="board-3" class="answer"> </Board>
          </div>
          <div style="margin-left: 60px" class="lineStructure">
              "J'adore les
            <Board id="board-4" class="answer"> </Board>
              bananes
            <Board id="board-5" class="answer"> </Board>
              !"
            <Board id="board-6" class="answer"> </Board>
          </div>
          <div style="margin-left: 60px" class="lineStructure">
              -
            <Board id="board-7" class="answer"> </Board>
              Donkey Kong
            <Board id="board-8" class="answer"> </Board>
          </div>
          <Board style="margin-left: 55px" id="board-9" class="answer"> </Board>
          <span style="margin-left: 30px">&#60;/body&#62;</span>
          <span>&#60;/html&#62;</span>
        </div>
      </template>
    </TextaTrous>
  </div>
</template>

<script>
import TextaTrous from "@/components/exercices/dropTheBlank.vue";
import Board from "@/components/exercices/Board.vue";

export default {
  components: {
    TextaTrous,
    Board,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item-0",
          value: "<b>",
          list: 1,
        },
        {
          id: 1,
          title: "Item-1",
          value: "</b>",
          list: 1,
        },
        {
          id: 2,
          title: "Item-2",
          value: "</div>",
          list: 1,
        },
        {
          id: 3,
          title: "Item-3",
          value: "<div>",
          list: 1,
        },
        {
          id: 4,
          title: "Item-4",
          value: "<br>",
          list: 1,
        },
        {
          id: 6,
          title: "Item-5",
          value: "<i>",
          list: 1,
        },
        {
          id: 7,
          title: "Item-6",
          value: "</i>",
          list: 1,
        },
        {
          id: 8,
          title: "Item-7",
          value: "<h1>",
          list: 1,
        },
        {
          id: 9,
          title: "Item-8",
          value: "</h1>",
          list: 1,
        },
      ],
      goodItems: [
        "<div>",
        "<h1>",
        "</h1>",
        "<i>",
        "</i>",
        "<br>",
        "<b>",
        "</b>",
        "</div>",
      ],
    };
  },
};
</script>

<style>
#consigne {
  margin-bottom: 10px;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.7em;
}

#box {
  padding: 10px;
  border: 3px dashed #aaaaaa;
  border-radius: 12px;
}
</style>