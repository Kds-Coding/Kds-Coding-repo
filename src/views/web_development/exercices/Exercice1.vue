<template>
  <div class="container CoursePage">
    <TextaTrous
      :answers="items1"
      :rightAnswers="goodItems1"
      identifier="Question1"
    >
      <template v-slot:TextContainer>
        <div class="CodeStructure container codeContainer" id="Question1">
          <span>&#60;html &#62;</span>
          <Board style="margin-left: 30px" id="board-1-1" class="answer">
          </Board>
          <div style="margin-left: 60px" class="lineStructure">
            <Board id="board-1-2" class="answer"> </Board>
            Le titre de mon site web présent dans mon head !
            <Board id="board-1-3" class="answer"> </Board>
          </div>
          <Board style="margin-left: 30px" id="board-1-4" class="answer">
          </Board>

          <span style="margin-left: 30px"> &#60;body &#62;</span>

          <span style="margin-left: 30px">&#60;/body &#62;</span>

          <span> &#60;/html &#62;</span>
        </div>

        <!-- Lorem ipsum <Board id="board-2 " class="answer"> </Board>dolor sit
          amet, consectetur
          <Board id="board-3" class="answer"> </Board>
          elit, sed do eiusmod tempor
          <Board id="board-4" class="answer"> </Board>
          incididunt ut labore et dolore
          <Board id="board-5" class="answer"> </Board>
          magna aliqua. Ut enim ad minim
          <Board id="board-6" class="answer"> </Board>
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
          <Board id="board-7" class="answer"> </Board> -->
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
      items1: [
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
      ],
      goodItems1: ["<head>", "<title>", "</title>", "</head>"],
    };
  },
};
</script>

<style>
</style>