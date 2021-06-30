<template>
  <div class="container CoursePage">
    <div id="consigne">
      <span>Reproduisez le texte qui suit:</span>
      <div id="box">
        <div>Je suis une div :)</div>
        <span>Je suis un span!</span>
      </div>
    </div>
    <TextaTrous
      :answers="items"
      :rightAnswers="goodItems"
      identifier="Question2"
    >
      <template v-slot:TextContainer>
        <div class="CodeStructure container codeContainer" id="Question2">
          <span>div {</span>
          <div style="margin-left: 60px" class="lineStructure">
            <span>padding-right:</span>
            <Board id="board-1" class="answer"> </Board>
            <span>px;</span>
          </div>
          <div style="margin-left: 60px" class="lineStructure">
            <span>background-color:</span>
            <Board id="board-2" class="answer"> </Board>
            <span>;</span>
          </div>
          <span>}</span>
          <span>span {</span>
          <div style="margin-left: 60px" class="lineStructure">
            <span>margin-left:</span>
            <Board id="board-3" class="answer"> </Board>
            <span>px;</span>
          </div>
          <div style="margin-left: 60px" class="lineStructure">
            <span>background-color:</span>
            <Board id="board-4" class="answer"> </Board>
            <span>;</span>
          </div>
          <span>}</span>
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
          value: "20",
          list: 1,
        },
        {
          id: 1,
          title: "Item-1",
          value: "green",
          list: 1,
        },
        {
          id: 2,
          title: "Item-2",
          value: "10",
          list: 1,
        },
        {
          id: 3,
          title: "Item-3",
          value: "red",
          list: 1,
        },
      ],
      goodItems: ["20", "red", "10", "green"],
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
  color: #f9f9f9;
  padding: 10px;
  border: 3px dashed #aaaaaa;
  border-radius: 12px;
}

#box div {
  width: max-content;
  padding-right: 50px;
  background-color: red;
}

#box span {
  margin-left: 10px;
  background-color: green;
}
</style>