<template>
  <div class="container CoursePage">
    <TextaTrous
      :answers="items2"
      :rightAnswers="goodItems2"
      identifier="Question2"
    >
      <template v-slot:TextContainer>
        <div class="CodeStructure container codeContainer" id="Question2">
          <span>&#60;html &#62;</span>
          <Board style="margin-left: 30px" id="board-2-1" class="answer">
          </Board>
          <div style="margin-left: 60px" class="lineStructure">
            <Board id="board-2-2" class="answer"> </Board>
            Mon site web
            <Board id="board-2-3" class="answer"> </Board>
          </div>
          <Board style="margin-left: 30px" id="board-2-4" class="answer">
          </Board>

          <span style="margin-left: 30px"> &#60;body &#62;</span>
          <Board id="board-2-5" class="answer" style="margin-left: 55px">
          </Board>

          <div style="margin-left: 60px" class="lineStructure">
            <Board id="board-2-6" class="answer"> </Board>
            La page de mon super site
            <Board id="board-2-7" class="answer"> </Board>
          </div>
          <Board style="margin-left: 55px" id="board-2-8" class="answer">
          </Board>

          <span style="margin-left: 55px"> &#60;footer &#62;</span>
          <span style="margin-left: 60px" class="lineStructure">
            <Board id="board-2-9" class="answer"> </Board>
            Mon pied de page incroyable
            <Board id="board-2-10" class="answer"> </Board>
          </span>

          <span style="margin-left: 60px"> &#60;/footer &#62;</span>

          <span style="margin-left: 30px">&#60;/body &#62;</span>

          <span> &#60;/html &#62;</span>
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
      items2: [
        {
          id: 0,
          title: "Item-0",
          value: "<title>",
          list: 1,
        },
        {
          id: 1,
          title: "Item-1",
          value: "</title>",
          list: 1,
        },
        {
          id: 2,
          title: "Item-2",
          value: "<head>",
          list: 1,
        },
        {
          id: 3,
          title: "Item-3",
          value: "</head>",
          list: 1,
        },
        {
          id: 4,
          title: "Item-4",
          value: "</h1>",
          list: 1,
        },

        {
          id: 6,
          title: "Item-6",
          value: "<h1>",
          list: 1,
        },

        {
          id: 8,
          title: "Item-8",
          value: "<p>",
          list: 1,
        },
        {
          id: 9,
          title: "Item-9",
          value: "</p>",
          list: 1,
        },

        {
          id: 10,
          title: "Item-10",
          value: "<main>",
          list: 1,
        },
        {
          id: 11,
          title: "Item-11",
          value: "</main>",
          list: 1,
        },
      ],
      goodItems2: [
        "<head>",
        "<title>",
        "</title>",
        "</head>",
        "<main>",
        "<h1>",
        "</h1>",
        "</main>",
        "<p>",
        "</p>",
      ],
    };
  },
};
</script>

<style>
</style>